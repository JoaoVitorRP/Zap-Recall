import styled from "styled-components";
import { useState } from "react";

export default function Buttons(props) {
  const {
    buttonsDisable,
    colors,
    setColors,
    clicked,
    completed,
    setCompleted,
  } = props;

  const [total, setTotal] = useState(0);

  function textColor(color) {
    let colorsCopy = [...colors];
    colorsCopy[clicked] = color;
    setColors(colorsCopy);
    const clickedCopy = [...completed, clicked];
    setCompleted(clickedCopy);
    setTotal(total + 1);
  }

  return (
    <Footer>
      <ButtonDiv>
        <Red onClick={() => textColor("#ff3030")} disabled={buttonsDisable}>
          Não lembrei
        </Red>
        <Yellow onClick={() => textColor("#ff922e")} disabled={buttonsDisable}>
          Quase não lembrei
        </Yellow>
        <Green onClick={() => textColor("#2fbe34")} disabled={buttonsDisable}>
          Zap!
        </Green>
      </ButtonDiv>
      {total}/8 CONCLUÍDOS
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 111px;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  font-size: 18px;

  text-align: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  padding: 5px;
  margin-bottom: 10px;
`;

const GeneralButton = styled.button`
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
  margin: 4px;
  padding: 0px 8px;

  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  color: #ffffff;
  text-align: center;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
`;

const Red = styled(GeneralButton)`
  background: #ff3030;
`;

const Yellow = styled(GeneralButton)`
  background: #ff922e;
`;

const Green = styled(GeneralButton)`
  background: #2fbe34;
`;
