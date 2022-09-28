import Logo from "./Logo";
import CardList from "./CardList";
import Buttons from "./Buttons";

import Reset from "../Reset";
import GlobalStyle from "../globalStyles";

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Logo />
      <CardList />
      <Buttons />
    </>
  );
}
