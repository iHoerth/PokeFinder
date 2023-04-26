import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Form from "../../components/Form/Form";

import { validateRegister } from "../../helpers/validators";

const Register = () => {
  return (
    <div>
      <NavBar />
      <Form
        formName='Register'
        fields={{
          user: {
            name: "User",
            type: "text",
            value: "",
          },
          confirmUser: {
            name: "Confirm User",
            type: "text",
            value: "",
          },
          password: {
            name: "Password",
            type: "text",
            value: "",
          },
          confirmPassword: {
            name: "Confirm Password",
            type: "text",
            value: "",
          },
          email: {
            name: "Email",
            type: "number",
            value: "",
          },
          confirmEmail: {
            name: "Confirm email",
            type: "number",
            value: "",
          },

        }}
        button={{
          value: "Log in!",
          type: "submit",
        }}
        action={validateRegister}
      />
    </div>
  );
};

export default Register;
