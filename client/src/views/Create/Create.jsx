import React from "react";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";

import { validateCreate } from "../../helpers/validators";
import { createPokemon } from "../../redux/actions";

const Create = () => {


  return (
    <>
      <NavBar />
      <Form
        formName='Create Pokemon'
        fields={{
          name: {
            name: "Nombre",
            type: "text",
            value: "",
          },
          img: {
            name: "Imagen",
            type: "text",
            value: "",
          },
          hp: {
            name: "HP",
            type: "number",
            value: "",
          },
          atk: {
            name: "Attack",
            type: "number",
            value: "",
          },
          def: {
            name: "Defense",
            type: "number",
            value: "",
          },
          spatk: {
            name: "Sp. Att",
            type: "number",
            value: "",
          },
          spdef: {
            name: "Sp. Def",
            type: "number",
            value: "",
          },
          speed: {
            name: "Speed",
            type: "number",
            value: "",
          },
          weight: {
            name: "Peso",
            type: "number",
            value: "",
          },
          height: {
            name: "Altura",
            type: "number",
            value: "",
          },
          type: {
            name: "Tipo",
            type: "text",
            value: "",
          },
          subType: {
            name: "Sub Tipo",
            type: "text",
            value: "",
          },
        }}
        button={{
          value: "Crear Pokemon!",
          type: "submit",
        }}
        action={createPokemon}
        validator={validateCreate}
      />
    </>
  );
};

export default Create;
