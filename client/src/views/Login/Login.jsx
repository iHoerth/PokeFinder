import React from "react";
import Form from "../../components/Form/Form.jsx";
import NavBar from "../../components/NavBar/NavBar";

import { validateLogin } from "../../helpers/validators.js";

const Login = () => {
  return (
    <div>
      <NavBar />
      <Form
        formName='Log In'
        fields={{
          user: {
            name: "Usuario",
            type: "text",
            value: "",
          },
          password: {
            name: "Contraseña",
            type: "text",
            value: "",
          },
          email: {
            name: "Email",
            type: "number",
            value: "",
          },

        }}
        button={{
          value: "Log in!",
          type: "submit",
        }}
        action={validateLogin}
      />
    </div>
  );
};

export default Login;
