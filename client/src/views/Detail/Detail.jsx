import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";

import style from "./Detail.module.css";
import { CardDetail, Section, Content, Type, Title, Container } from "./styledComponents";
import { Stats } from "./Stats";
import { toTitleCase } from "../../helpers/helpers";

const Detail = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const detail = useSelector((state) => state.detail);

  const { id } = useParams();

  useEffect(() => {
    if (Object.keys(detail).length) {
      setPokemon(detail);
      setLoading(false);
      console.log(detail);
    } else {
      axios(`http://localhost:3001/pokemons/${id}`).then((res) => {
        setPokemon(res.data);
        setLoading(false);
        console.log(res.data);
      });
    }
  }, [id]);

  if (loading) {
    return <h3>L O A D I N G</h3>;
  }

  return (
    <>
      <NavBar />
      <Container>
        <CardDetail>
          <Section style={{ flexDirection: "row" }}>
            <Content style={{ fontSize: "48px" }}>{pokemon.name}</Content>
            <Content style={{ flex: "0.2" }}>#{pokemon.id}</Content>
          </Section>

          <Section>
            <Content>
              <img src={pokemon.img} alt="" />
            </Content>
          </Section>

          <Section>
            <Title>TYPES</Title>
            <Content>
              <div style={{ display: "flex", gap: "32px", padding: "5px" }}>
                {pokemon.types.map((type) => (
                  <Type color={type}>{toTitleCase(type)}</Type>
                ))}
              </div>
            </Content>
          </Section>

          <div style={{ display: "flex", gap: "4px" }}>
            <Section>
              <Title>Weight</Title>
              <Content>{pokemon.weight} kg</Content>
            </Section>

            <Section>
              <Title>Height</Title>
              <Content>{pokemon.height} m</Content>
            </Section>
          </div>
        </CardDetail>
        <Stats pokemon={pokemon} />
      </Container>
    </>
  );
};

export default Detail;
