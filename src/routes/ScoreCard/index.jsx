import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Content from "./components";
import "./index.css";
import map from "../../assets/images/map.webp";
import GlobalContentWrapper from "../../components/globalWapper";

export default function ScoreCard() {
  const [game, setGame] = useState(
    JSON.parse(localStorage.getItem("RedDragonGolf"))
  );

  useEffect(() => {
    if (!game) return;

    localStorage.setItem("RedDragonGolf", JSON.stringify(game));
  }, [game]);

  return (
    <>
      <GlobalContentWrapper className="scoreCard_container">
        <NavBar name="scoreCard" courseNumber={game.isAda ? 2 : 1} />
        <Content gameState={setGame} game={game} />
      </GlobalContentWrapper>
      <img src={map} alt="pirets map background image" id="backgroundImg" />
    </>
  );
}
