import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Content from "./components";
import "./index.css";
import map from "../../assets/images/map.webp";

export default function ScoreCard() {
  const [game, setGame] = useState(
    JSON.parse(localStorage.getItem("RedDragonGolf"))
  );
  const root = document.getElementById("root");
  useEffect(() => {
    if (!game) return;

    localStorage.setItem("RedDragonGolf", JSON.stringify(game));
  }, [game]);

  root.style.backgroundImage = `url(${map})`;
  return (
    <>
      <NavBar name="scoreCard" courseNumber={game.isAda ? 2 : 1} />
      <Content gameState={setGame} game={game} />
    </>
  );
}
