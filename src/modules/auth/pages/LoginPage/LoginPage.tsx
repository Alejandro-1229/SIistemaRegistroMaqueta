import { InputField } from "../../components/InputField/InputField";
import { useForm } from "react-hook-form";
import "./LoginPage.scss";
import AuthService from "@/services/AuthService";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export const LoginPage = () => {

  const [redirect, setRedirect] = useState(false);
  const [typeUser, setTypeUser] = useState(0);
  const navigate = useNavigate();

  const apiAuth = new AuthService();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  
  const onSubmit = async (data: any) => {
    try {
      const response = await apiAuth.login({
        codUsuario: data.email,
        password: data.password
      });

      setTypeUser(response.data.Usuario.idTipoUsuario);
      
  
      if (response.request.status === 200) {
        window.localStorage.setItem('token', response.data.AccessToken);
        window.localStorage.setItem('idTipoUsuario', response.data.Usuario.idTipoUsuario);
        window.localStorage.setItem('correo', response.data.Usuario.codUsuario);
        setRedirect(true);
      }
      reset();
      
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }

  
  if (redirect && (typeUser === 2)) {
    navigate("/control");
    return null;
  }else if(redirect && (typeUser === 1)){
    navigate("/ingenieros");
    return null;
  }
  return (
    <div className="login-container">
      <form className="login-form" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <h2>Inicio Sesión</h2>
        <InputField
          type="text"
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          pattern={{
            value:
              /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato no válido",
          }}
        />
        <InputField
          type="password"
          label="Password"
          name="password"
          register={register}
          error={errors.password}
          minLength={8}
          minLengthMessage="La contraseña debe tener al menos 8 caracteres"
        />
        <button className='button'>Entrar</button>
      </form>
    </div>
  );
};



/*
<div className="form-group-index">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group-index">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
*/