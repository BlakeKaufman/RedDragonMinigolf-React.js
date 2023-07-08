import { useState } from "react";
import NavBar from "../../components/NavBar";
import Content from "./components";
import "./index.css";
import map from "../../assets/images/map.webp";
import SubmitButton from "../../components/SubmitButton";

export default function ScoreCard() {
  const [game, setGame] = useState(
    JSON.parse(localStorage.getItem("RedDragonGolf"))
  );
  localStorage.setItem("RedDragonGolf", JSON.stringify(game));

  function submitScorecard() {
    localStorage.setItem("RedDragonGolf", JSON.stringify(game));

    window.open("https://rdadventuregolf.netlify.app/leaderboard", "_self");
  }

  return (
    <div className="scoreCard_container">
      <Content gameState={setGame} game={game} />
      <SubmitButton functionName={submitScorecard} content="See Winner" />
      <img
        src={map}
        alt="pirets map background image"
        className="backgroundImg"
      />
    </div>
  );
}
