import styled from "styled-components";

export default function Buttons() {
  return (
    <Footer>
      <ButtonDiv>
        <Red>Não lembrei</Red>
        <Yellow>Quase não lembrei</Yellow>
        <Green>Zap!</Green>
      </ButtonDiv>
      0/4 CONCLUÍDOS
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

  cursor: pointer;

  color: #ffffff;
  text-align: center;
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
