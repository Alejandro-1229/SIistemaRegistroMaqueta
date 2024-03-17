import "./RegisterPage.scss";
import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister/FormRegister";

export const RegisterPage = () => {
 
  return (
    <main className="login">
      <div className="login__header">
        <h1 className="login__title">Crea tu cuenta</h1>
        <h3 className="login__new">
          Ya tienes una cuenta?{" "}
          <Link to="/auth/login">
            <span className="login__new--create">Ingresa</span>
          </Link>
        </h3>
      </div>
      <FormRegister/>
    </main>
  );
};
