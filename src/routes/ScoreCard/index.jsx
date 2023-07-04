import NavBar from "../../components/NavBar";
import Content from "./components";
import "./index.css";
import map from "../../assets/images/map.webp";

export default function ScoreCard() {
  const game = JSON.parse(localStorage.getItem("RedDragonGolf"));

  return (
    <div className="scoreCard_container">
      <NavBar name="scoreCard" courseNumber={game.isAda ? 2 : 1} />
      <Content />
      <img
        src={map}
        alt="pirets map background image"
        className="backgroundImg"
      />
    </div>
  );
}
