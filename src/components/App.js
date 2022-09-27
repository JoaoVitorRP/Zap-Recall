import Logo from "./Logo";
import Cards from "./Cards";
import Buttons from "./Buttons";

import Reset from "../Reset";
import GlobalStyle from "../globalStyles";

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Logo />
      <Cards />
      <Buttons />
    </>
  );
}
