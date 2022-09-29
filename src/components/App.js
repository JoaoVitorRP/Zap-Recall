import { useState } from "react";

import Logo from "./Logo";
import CardList from "./CardList";
import Buttons from "./Buttons";

import Reset from "../Reset";
import GlobalStyle from "../globalStyles";

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
  const [clickedIndex, setClickedIndex] = useState();
  const [completed, setCompleted] = useState([]);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Logo />
      <CardList
        setButtonsDisable={setButtonsDisable}
        colors={colors}
        clickedIndex={clickedIndex}
        setClickedIndex={setClickedIndex}
        completed={completed}
      />
      <Buttons
        buttonsDisable={buttonsDisable}
        setButtonsDisable={setButtonsDisable}
        colors={colors}
        setColors={setColors}
        clickedIndex={clickedIndex}
        completed={completed}
        setCompleted={setCompleted}
      />
    </>
  );
}
