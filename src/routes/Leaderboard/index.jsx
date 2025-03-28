import altLogo from "/altLogo.webp";

import map from "../../assets/images/map.webp";
import NavBar from "../../components/NavBar";
import LeaderBoardCard from "./components/LeaderBoardCard";
import "./index.css";
import GlobalContentWrapper from "../../components/globalWapper";
import SafeAreaWrapper from "../../components/safeAreaWrapper";

export default function Leaderboard() {
  const game = JSON.parse(localStorage.getItem("RedDragonGolf"));

  game.Players = game.Players.map((player) => {
    return {
      ...player,
      total_score: player.score.reduce((count, value) => {
        return count + value.score;
      }, 0),
    };
  });

  game.Players.sort((a, b) => {
    return a.total_score - b.total_score;
  });

  const leaderBoardElements = game.Players.map((player) => {
    return <LeaderBoardCard key={player.id} {...player} />;
  });
  return (
    <>
      <GlobalContentWrapper className="leaderboard_container">
        <NavBar name="leaderboard" />
        <SafeAreaWrapper className="leaderboard_content_container">
          <img id="fullTextLogo" src={altLogo} alt="red dragon cove logo" />
          <h1>Leaderboard</h1>
          <div className="leaderboard">{leaderBoardElements}</div>
        </SafeAreaWrapper>
      </GlobalContentWrapper>
      <img id="backgroundImg" src={map} alt="background map image" />
    </>
  );
}
