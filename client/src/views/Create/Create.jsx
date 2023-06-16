import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { validateCreate } from "../../helpers/validators";
import { createPokemon } from "../../redux/actions";
import Loading from "../../components/Loading/Loading";

const Create = () => {
  const [loading, setLoading] = useState(true);
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    pokemons.length ? setLoading(false) : setLoading(true);
  }, [pokemons]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <NavBar />
      <Form
        formName="Create Pokemon"
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
            value: 0,
          },
          attack: {
            name: "Attack",
            type: "number",
            value: 0,
          },
          defense: {
            name: "Defense",
            type: "number",
            value: 0,
          },
          special_attack: {
            name: "Sp. Att",
            type: "number",
            value: 0,
          },
          special_defense: {
            name: "Sp. Def",
            type: "number",
            value: 0,
          },
          speed: {
            name: "Speed",
            type: "number",
            value: 0,
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
        pokemons={pokemons}
      />
    </>
  );
};

export default Create;
