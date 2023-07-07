import altLogo from "../../assets/images/altLogo.webp";

import map from "../../assets/images/map.webp";
import NavBar from "../../components/NavBar";
import LeaderBoardCard from "./components/LeaderBoardCard";
import "./index.css";

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
    <div className="leaderboard_container">
      <NavBar name="leaderboard" />
      <div className="leaderboard_content_container">
        <img className="altLogo" src={altLogo} alt="red dragon cove logo" />
        <h1>Leaderboard</h1>
        <div className="leaderboard">{leaderBoardElements}</div>
      </div>
      <img className="backgroundImg" src={map} alt="background map image" />
    </div>
  );
}
