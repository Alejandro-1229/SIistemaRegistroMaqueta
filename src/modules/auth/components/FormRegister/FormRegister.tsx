import { useForm } from "react-hook-form";
import { InputField } from "../InputField/InputField";

export const FormRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    // reset();
    console.log("usuario creado");
  };

  const password = watch("password", "");


  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="login__form">
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
      <InputField
        type="password"
        label="Confirmar Password"
        name="ConfirmarPassword"
        register={register}
        error={errors.ConfirmarPassword}
        minLength={8}
        minLengthMessage="La contraseña debe tener al menos 8 caracteres"
        validate={{
          custom: (value) =>
            value === password || "Las contraseñas no coinciden",
        }}
      />
      <div className="login__buttons">
        <button type="submit" className="login__button">
          Crea tu cuenta
        </button>
      </div>
    </form>
  );
};
