import styled from "styled-components";

export default function Buttons(props) {
  const {
    buttonsDisable,
    setButtonsDisable,
    colors,
    setColors,
    clickedIndex,
    completed,
    setCompleted,
  } = props;

  function textColor(color) {
    let colorsCopy = [...colors];
    colorsCopy[clickedIndex] = color;
    setColors(colorsCopy);

    const totalCompleted = [...completed, clickedIndex];
    setCompleted(totalCompleted);

    setButtonsDisable(true);
  }

  return (
    <Footer data-identifier="flashcard-counter">
      <ButtonDiv>
        <Red onClick={() => textColor("#ff3030")} disabled={buttonsDisable} data-identifier="forgot-btn">
          Não lembrei
        </Red>
        <Yellow onClick={() => textColor("#ff922e")} disabled={buttonsDisable} data-identifier="almost-forgot-btn">
          Quase não lembrei
        </Yellow>
        <Green onClick={() => textColor("#2fbe34")} disabled={buttonsDisable} data-identifier="zap-btn">
          Zap!
        </Green>
      </ButtonDiv>
      {completed.length}/8 CONCLUÍDOS
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
