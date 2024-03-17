import { Link } from "react-router-dom";
import { InputField } from "../InputField/InputField";
import { useForm } from "react-hook-form";

export const FormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="login__buttons">
        <button className="login__button">Iniciar sesión</button>
        <Link to="/auth/lost-password">
          <span>Has olvidado tu contraseña ?</span>
        </Link>
      </div>
    </form>
  );
};
