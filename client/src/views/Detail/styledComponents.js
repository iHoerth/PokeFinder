import styled from "styled-components";

const typeColors = {
  Grass: "#FFFFFF",
  Water: "#AAAAAA",
  Fire: "#AAAAAA",
  Poison: "#AAAAAA",
  Electric: "#AAAAAA",
  Ghost: "#AAAAAA",
  Psychic: "#AAAAAA",
  Fairy: "#AAAAAA",
  Steel: "#AAAAAA",
  Fighting: "#AAAAAA",
  Rock: "#AAAAAA",
  Ground: "#AAAAAA",
  Normal: "#AAAAAA",
  Ice: "#AAAAAA",
  Dragon: "#AAAAAA",
  Dark: "#AAAAAA",
  Bug: "#AAAAAA",
  Flying: "#AAAAAA",
};

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  border: 1px solid rgb(79, 81, 237);
  min-width: 500px;
  min-height: 700px;
  margin: 30px;
  padding: 4px;
  gap: 4px;
  background-color: rgb(79, 132, 237);
  border-radius: 8px;
`;



export const CardDetail = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(79, 81, 237);
  width: 500px;
  min-height: 700px;
  padding: 4px;
  gap: 4px;
  background-color: rgb(79, 132, 237);
  border-radius: 8px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4px;
  gap: 4px;
  background-color: lightblue;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-height: 100%;
  padding: 4px;
  border-radius: 6px;
  background-color: white;
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid black;
  padding: 0 4px 0 4px;
  font-size: 14px;
  background-color: ${(props) => typeColors[props.color]};
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  flex: 0.05;
  // height: 4px;
`;
