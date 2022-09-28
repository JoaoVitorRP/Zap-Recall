import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Logo() {
  return (
    <Header>
      <Img src={logo} alt="logo"></Img>
      <h1>ZapRecall</h1>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 144px;
  background: #FB6B6B;

  font: normal 400 36px "Righteous", cursive;
  color: #ffffff;
`;

const Img = styled.img`
  width: 52px;
  height: 60px;
  margin-right: 25px;
`;
