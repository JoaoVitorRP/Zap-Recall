import Logo from "./Logo";
import CardList from "./CardList";
import Buttons from "./Buttons";

import Reset from "../Reset";
import GlobalStyle from "../globalStyles";

import { useState } from "react";

export default function App() {
  const [buttonsDisable, setButtonsDisable] = useState(true);
  const [colors, setColors] = useState([
    "##333333",
    "##333333",
    "##333333",
    "##333333",
    "##333333",
    "##333333",
    "##333333",
    "##333333",
  ]);
  const [clicked, setClicked] = useState();
  const [completed, setCompleted] = useState([]);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Logo />
      <CardList
        setButtonsDisable={setButtonsDisable}
        colors={colors}
        clicked={clicked}
        setClicked={setClicked}
        completed={completed}
      />
      <Buttons
        buttonsDisable={buttonsDisable}
        colors={colors}
        setColors={setColors}
        clicked={clicked}
        completed={completed}
        setCompleted={setCompleted}
      />
    </>
  );
}
