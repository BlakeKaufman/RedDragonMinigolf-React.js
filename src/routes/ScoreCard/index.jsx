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
    console.log(game, "ZZZ");
    setGame((prevGame) => {
      console.log(prevGame, "PPPPP");
      return {
        ...prevGame,
        Players: prevGame.Players.map((player) => {
          return {
            ...player,
            total_score: player.score.reduce((count, value) => {
              console.log(count + value.score);

              return count + value.score;
            }, 0),
          };
        }),
      };
    });

    localStorage.setItem("RedDragonGolf", JSON.stringify(game));

    window.open("http://localhost:5173/leaderboard", "_self");
  }

  return (
    <div className="scoreCard_container">
      <NavBar name="scoreCard" courseNumber={game.isAda ? 2 : 1} />
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
