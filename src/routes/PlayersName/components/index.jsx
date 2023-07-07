import { useState } from "react";
import altLogo from "../../../assets/images/altLogo.webp";
import NameCard from "./NameCard";
import Popup from "../../../components/Popup";
import SubmitButton from "../../../components/SubmitButton";

function createArray() {
  return Array.from({ length: 18 }, (_, index) => {
    return { hole: index + 1, score: 0 };
  });
}

const playersArr = [
  {
    id: 1,
    name: "",
    score: createArray(),
  },
  {
    id: 2,
    name: "",
    score: createArray(),
  },
  {
    id: 3,
    name: "",
    score: createArray(),
  },
  {
    id: 4,
    name: "",
    score: createArray(),
  },
  {
    id: 5,
    name: "",
    score: createArray(),
  },
  {
    id: 6,
    name: "",
    score: createArray(),
  },
];
export default function Content() {
  const [players, setPlayers] = useState(playersArr);
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);

  function submitForm() {
    const filledPlayers = players.filter((player) =>
      player.name ? player : null
    );

    if (filledPlayers.length != 0) {
      const game = JSON.parse(localStorage.getItem("RedDragonGolf"));

      game.Players = filledPlayers;

      localStorage.setItem("RedDragonGolf", JSON.stringify(game));

      window.open("http://rdadventuregolf.com/scoreCard", "_self");
    } else {
      setIsPopupDisplayed(true);
    }
  }
  function getPlayers(event, id) {
    const content = event.target.value;

    setPlayers((prevArr) => {
      return prevArr.map((player) =>
        player.id === id ? { ...player, name: content } : player
      );
    });
  }

  function clearPopup() {
    setIsPopupDisplayed(false);
  }

  const inputElements = players.map((player) => (
    <NameCard handleForm={getPlayers} key={player.id} id={player.id} />
  ));
  return (
    <div className="form_content">
      <img className="altLogo" src={altLogo} alt="red dragon logo" />
      <h1>Enter Players</h1>
      {inputElements}

      <SubmitButton functionName={submitForm} content="Begin" />
      <Popup
        clearPopup={clearPopup}
        isDisplayed={isPopupDisplayed}
        text="Please Enter Players Name"
      />
    </div>
  );
}
