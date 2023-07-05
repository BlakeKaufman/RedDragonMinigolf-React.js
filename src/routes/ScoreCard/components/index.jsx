import { useState } from "react";
import logo from "../../../assets/images/altLogo.webp";
import Row from "./ScoreCardRow";
import Popup from "../../../components/Popup";
import ScoreSelector from "./ScoreSelector";
const holes = [
  { id: 0 },
  { id: 1, ada: 2, nonAda: 2 },
  { id: 2, ada: 2, nonAda: 3 },
  { id: 3, ada: 2, nonAda: 2 },
  { id: 4, ada: 2, nonAda: 2 },
  { id: 5, ada: 2, nonAda: 2 },
  { id: 6, ada: 2, nonAda: 2 },
  { id: 7, ada: 2, nonAda: 2 },
  { id: 8, ada: 2, nonAda: 2 },
  { id: 9, ada: 3, nonAda: 2 },
  { id: "scoref" },
  { id: 10, ada: 2, nonAda: 2 },
  { id: 11, ada: 2, nonAda: 3 },
  { id: 12, ada: 2, nonAda: 2 },
  { id: 13, ada: 2, nonAda: 2 },
  { id: 14, ada: 3, nonAda: 2 },
  { id: 15, ada: 2, nonAda: 2 },
  { id: 16, ada: 2, nonAda: 2 },
  { id: 17, ada: 3, nonAda: 2 },
  { id: 18, ada: 2, nonAda: 2 },
  { id: "scoreb" },
];
export default function Content() {
  const [game, setGame] = useState(
    JSON.parse(localStorage.getItem("RedDragonGolf"))
  );
  const [popupDisplayed, setPopupDisplayed] = useState(false);
  const [targetPlayer, setTargetPlayer] = useState([]);

  function showPopup(playerId, holeId) {
    setTargetPlayer([playerId, holeId]);
    setPopupDisplayed(true);
  }

  function setScore(event) {
    const targetEvent = event.target;
    if (targetEvent.classList.contains("score")) {
      const clickedScore = Number(targetEvent.textContent);
      const [playerId, holeId] = targetPlayer;

      const [filteredPlayer] = game.Players.filter(
        (player) => player.id === playerId
      );

      const updatedScore = filteredPlayer.score.map((score) =>
        score.hole === holeId ? { ...score, score: clickedScore } : score
      );

      const t = game.Players.map((player) => {
        return player.id === playerId
          ? { ...player, score: updatedScore }
          : player;
      });

      setGame((prevGame) => {
        const newGame = {
          ...prevGame,
          Players: prevGame.Players.map((player) => {
            return player.id === playerId
              ? { ...player, score: updatedScore }
              : player;
          }),
        };
        localStorage.setItem("RedDragonGolf", JSON.stringify(newGame));
        return newGame;
      });

      setPopupDisplayed(false);
    } else {
      setPopupDisplayed(false);
    }
  }

  const rowElements = holes.map((hole) => {
    return (
      <Row
        handleClick={showPopup}
        game={game}
        key={hole.id}
        totals={{ frontAda: 19, backAda: 20, frontNonAda: 19, backNonAda: 19 }}
        {...hole}
      />
    );
  });

  const headingColorStyles = {
    color: !game.isAda ? "orange" : "lightblue",
  };
  const gridStyle = {
    gridTemplateColumns: `repeat(2, 0.65fr) repeat(${game.Players.length}, 5fr)`,
  };

  return (
    <div className="scoreCard_content_container">
      <img src={logo} alt="red dragon logo" className="logo" />
      <h1 style={headingColorStyles}>{game.courseName.toUpperCase()}</h1>
      <div style={gridStyle} className="grid-container">
        {rowElements}
      </div>
      <ScoreSelector
        game={game}
        setScore={setScore}
        isDisplayed={popupDisplayed}
      />
    </div>
  );
}
