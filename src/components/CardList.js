import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";

export default function CardList() {
  const deck = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "Expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes ",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const [clicked, setClicked] = useState([]);
  const [disabled, setDisabled] = useState(false);

  return (
    <Cards>
      {deck.map((c, index) => (
        <Card
          key={index}
          c={c}
          index={index}
          clicked={clicked}
          setClicked={setClicked}
          disabled={disabled}
          setDisabled={setDisabled}
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
