import logo from "../../../assets/images/Logo.webp";
import { Link } from "react-router-dom";

export default function Content() {
  function setGame() {
    const game = {
      courseName: "",
      isAda: "",
      Players: [],
    };
    localStorage.setItem("RedDragonGolf", JSON.stringify(game));

    window.open("http://rdadventuregolf.com/selectCource", "_self");
  }
  return (
    <div className="content">
      <img className="logo" src={logo} alt="" />
      <span onClick={setGame}>Start Round</span>
    </div>
  );
}
