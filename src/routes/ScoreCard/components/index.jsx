import { useCallback, useMemo, useState } from "react";
import logo from "/altLogo.webp";
import Row from "./ScoreCardRow";

import ScoreSelector from "./ScoreSelector";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/SubmitButton";
import { GOLF_COURSE_HOLES } from "../../../constants";
import SafeAreaWrapper from "../../../components/safeAreaWrapper";

export default function Content({ game, gameState }) {
  const navigate = useNavigate();
  const [popupDisplayed, setPopupDisplayed] = useState(false);
  const [targetPlayer, setTargetPlayer] = useState([]);

  function setScore(event) {
    try {
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

        gameState((prevGame) => {
          return {
            ...prevGame,
            Players: prevGame.Players.map((player) => {
              return player.id === playerId
                ? { ...player, score: updatedScore }
                : player;
            }),
          };
        });
      }
    } catch (err) {
      console.log("set score error", err);
    } finally {
      setPopupDisplayed(false);
      setTargetPlayer([]);
    }
  }

  const showPopup = useCallback((playerId, holeId) => {
    setTargetPlayer([playerId, holeId]);
    setPopupDisplayed(true);
  }, []);

  const submitScorecard = useCallback(() => {
    navigate("/leaderboard");
  }, []);

  const rowElements = useMemo(() => {
    return GOLF_COURSE_HOLES.map((hole) => {
      return (
        <Row
          handleClick={showPopup}
          game={game}
          key={hole.id}
          totals={{
            frontAda: 19,
            backAda: 20,
            frontNonAda: 19,
            backNonAda: 19,
          }}
          {...hole}
        />
      );
    });
  }, [showPopup, game]);

  const headingColorStyles = {
    color: !game.isAda ? "orange" : "lightblue",
  };
  const gridStyle = {
    gridTemplateColumns: `repeat(2, 0.65fr) repeat(${game.Players.length}, 5fr)`,
  };

  return (
    <SafeAreaWrapper className="scoreCard_content_container">
      <img src={logo} alt="red dragon logo" id="fullTextLogo" />
      <h1 style={headingColorStyles}>{game.courseName.toUpperCase()}</h1>
      <div style={gridStyle} className="grid-container">
        {rowElements}
      </div>
      <SubmitButton functionName={submitScorecard} content="See Winner" />
      <ScoreSelector
        game={game}
        setScore={setScore}
        isDisplayed={popupDisplayed}
      />
    </SafeAreaWrapper>
  );
}
