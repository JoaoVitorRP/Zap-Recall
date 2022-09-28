import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";

export default function CardList(props) {
  const { setButtonsDisable, colors, clicked, setClicked, completed } = props;

  const deck = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
      textColor: `${colors[0]}`
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
      textColor: `${colors[1]}`
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
      textColor: `${colors[2]}`
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "Expressões",
      textColor: `${colors[3]}`
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
      textColor: `${colors[4]}`
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
      textColor: `${colors[5]}`
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes ",
      textColor: `${colors[6]}`
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        textColor: `${colors[7]}`
    },
  ];

  const [disabled, setDisabled] = useState(false);

  return (
    <Cards>
      {deck.map((c, index) => (
        <Card
          key={index}
          c={c}
          index={index}
          disabled={disabled}
          setDisabled={setDisabled}
          setButtonsDisable={setButtonsDisable}
          clicked={clicked}
          setClicked={setClicked}
          completed={completed}
        />
      ))}
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
