import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";

import { Stats } from "./Stats";
import { toTitleCase } from "../../helpers/helpers";

import { CardDetail, Section, Content, Type, Title, Container } from "./styledComponents";
import style from "./Detail.module.css";

const Detail = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail);

  const { id } = useParams();

  useEffect(() => {
    if (Object.keys(detail).length) {
      setPokemon(detail);
      setLoading(false);
      console.log(detail);
    } else {
      const parsedid = toTitleCase(id);
      navigate(`/pokemons/detail/${toTitleCase(id)}`);
      axios(`http://localhost:3001/pokemons/${parsedid}`).then((res) => {
        setPokemon(res.data);
        setLoading(false);
        console.log(res.data);
      });
    }
  }, [id]);

  if (loading) {
    return <Loading />;
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
