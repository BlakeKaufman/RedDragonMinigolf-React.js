import { useState } from "react";
import altLogo from "../../../assets/images/altLogo.webp";
import NameCard from "./NameCard";
import Popup from "../../../components/Popup";

const playersArr = [
  {
    id: 1,
    name: "",
    score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    id: 2,
    name: "",
    score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    id: 3,
    name: "",
    score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    id: 4,
    name: "",
    score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    id: 5,
    name: "",
    score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    id: 6,
    name: "",
    score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

      window.open("http://localhost:5173/scoreCard", "_self");
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
      <img className="logo" src={altLogo} alt="red dragon logo" />
      <h1>Enter Players</h1>
      {inputElements}
      <span onClick={submitForm} className="submit_BTN">
        Begin
      </span>
      <Popup
        clearPopup={clearPopup}
        isDisplayed={isPopupDisplayed}
        text="Please Enter Players Name"
      />
    </div>
  );
}
