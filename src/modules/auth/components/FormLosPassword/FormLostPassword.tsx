import { useForm } from "react-hook-form";
import { InputField } from "../InputField/InputField";
import { Link } from "react-router-dom";

export const FormLostPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
    console.log("recuperando contrasenia");
    // openLostPassword();
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="login__form">
      <InputField
        type="text"
        label="Email"
        name="email"
        register={register}
        error={errors.email}
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Email no válido",
        }}
      />
      <div className="login__buttons">
        <button type="submit" className="login__button">
          Confirmar
        </button>
        <Link to="/auth/login">
          <span>Regresa al login</span>
        </Link>
      </div>
    </form>
  );
};
