import NavBar from "../../components/NavBar";
import Content from "./components";
import "./index.css";
import map from "../../assets/images/map.webp";
import SubmitButton from "../../components/SubmitButton";

export default function ScoreCard() {
  const game = JSON.parse(localStorage.getItem("RedDragonGolf"));

  function submitScorecard() {
    console.log("test");

    window.open("http://localhost:5173/leaderboard", "_self");
  }

  return (
    <div className="scoreCard_container">
      <NavBar name="scoreCard" courseNumber={game.isAda ? 2 : 1} />
      <Content />
      <SubmitButton functionName={submitScorecard} content="See Winner" />
      <img
        src={map}
        alt="pirets map background image"
        className="backgroundImg"
      />
    </div>
  );
}
