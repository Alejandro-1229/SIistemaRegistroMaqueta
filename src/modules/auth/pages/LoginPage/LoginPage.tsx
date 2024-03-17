import { Link } from "react-router-dom";
import "./LoginPage.scss";
import { FormLogin } from "../../components/FormLogin/FormLogin";

export const LoginPage = () => {


  return (
    <main className="login"> 
      <div className="login__header">
        <h1 className="login__title">Iniciar sesión</h1>
        <h3 className="login__new">
          Eres nuevo?
          <Link to="/auth/register">
            <span className="login__new--create">Crear una cuenta</span>
          </Link>
        </h3>
      </div>
      <div className="login__options">
        <div className="login__item">Crea tu cuenta con Google</div>
        <div className="login__item">Crea tu cuenta con Facebook</div>
      </div>
      <FormLogin/>
    </main>
  );
};
