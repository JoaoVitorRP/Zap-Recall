import styled from "styled-components";
import play from "../assets/img/play-outline-icon.svg";

export default function Cards() {
  const questions = [
    "O que é JSX?",
    "O React é __",
    "Componentes devem iniciar com __",
    "Podemos colocar __ dentro do JSX",
    "O ReactDOM nos ajuda __",
    "Usamos o npm para __",
    "Usamos props para __",
    "Usamos estado (state) para __",
  ];

  return (
    <CardList>
      {questions.map((p, index) => (
        <Card key={index}>
          Pergunta {index+1}<Img src={play}></Img>
        </Card>
      ))}
    </CardList>
  );
}

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 300px;
  height: 65px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 25px;
  padding: 15px;

  font-size: 16px;
  font-weight: 700;
`;

const Img = styled.img`
  width: 30px;
  cursor: pointer;
`;