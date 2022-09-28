import styled from "styled-components";
import play from "../assets/img/play-outline-icon.svg";
import arrows from "../assets/img/Vector.svg";
import { useState } from "react";

export default function Card(props) {
  const { c, index, clicked, setClicked, disabled, setDisabled } = props;

  const [flippedStatus, setFlippedStatus] = useState(false);
  const [cardText, setCardText] = useState();

  function revealQuestion(i, text) {
    const clickedIndex = [i];
    setClicked(clickedIndex);
    setDisabled(true);
    setFlippedStatus(true);
    setCardText(text);
  }

  function revealAnswer(i, text) {
    setDisabled(false);
    setFlippedStatus(false);
    setCardText(text);
  }

  return (
    <Flashcard isClicked={clicked.includes(index) ? true : false} key={index}>
      {clicked.includes(index) ? `${cardText}` : `Pergunta ${index + 1}`}
      <Button onClick={() => revealQuestion(index, c.question)} disabled={disabled}>
        <PlayImg
          isClicked={clicked.includes(index) ? true : false}
          src={play}
        ></PlayImg>
      </Button>
      <ArrowsImg
        isFlipped={flippedStatus}
        isClicked={clicked.includes(index) ? true : false}
        src={arrows}
        onClick={() => revealAnswer(index, c.answer)}
      ></ArrowsImg>
    </Flashcard>
  );
}

const Flashcard = styled.div`
  display: flex;
  align-items: ${(props) => (props.isClicked ? "flex-start" : "center")};
  justify-content: space-between;
  position: relative;

  width: 300px;
  height: ${(props) => (props.isClicked ? "131px" : "65px")};
  background: ${(props) => (props.isClicked ? "#FFFFD4" : "#FFFFFF")};
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 25px;
  padding: 15px;

  font-size: 16px;
  font-weight: ${(props) => (props.isClicked ? "400" : "700")};

  transition: height 0.2s;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 30px;
  background: transparent;
  cursor: ${(props) => props.disabled ? "default" : "pointer"};

  border: none;
`;

const PlayImg = styled.img`
  width: 30px;
  height: 30px;

  display: ${(props) => (props.isClicked ? "none" : "inherit")};
`;

const ArrowsImg = styled.img`
  width: 30px;
  cursor: pointer;

  position: absolute;
  bottom: 15px;
  right: 15px;

  display: ${(props) => (props.isFlipped ? "inherit" : "none")};
`;
