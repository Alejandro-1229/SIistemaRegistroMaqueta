import "./LostPassword.scss";
import { FormLostPassword } from "../../components/FormLosPassword/FormLostPassword";

export const LostPassword = () => {

  return (
    <main className="login">
      <div className="login__header">
        <h1 className="login__title">¿Has olvidado tu contraseña?</h1>
        <h3 className="login__new">
          Te enviaremos un correo electrónico con un enlace que te permitirá
          establecer una nueva contraseña
        </h3>
      </div>
      <FormLostPassword/>
    </main>
  );
};
