import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Form from "../../components/Form/Form";

import { validate } from "../../helpers/helpers";

const Register = () => {
  return (
    <div>
      <NavBar />
      <Form
        formName='Register'
        fields={{
          user: {
            name: "Usuario",
            type: "text",
            value: "",
          },
          confirmUser: {
            name: "Confirmar Usuario",
            type: "text",
            value: "",
          },
          password: {
            name: "Contraseña",
            type: "text",
            value: "",
          },
          confirmPassword: {
            name: "Confirmar contraseña",
            type: "text",
            value: "",
          },
          email: {
            name: "Email",
            type: "number",
            value: "",
          },
          confirmarEmail: {
            name: "Confirmar email",
            type: "number",
            value: "",
          },

        }}
        button={{
          value: "Log in!",
          type: "submit",
        }}
        action={validate}
      />
    </div>
  );
};

export default Register;
