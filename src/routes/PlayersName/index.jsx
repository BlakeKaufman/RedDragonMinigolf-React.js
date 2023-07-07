import NavBar from "../../components/NavBar";
import Content from "./components/index";
import mapImg from "../../assets/images/map.webp";
import "./index.css";

export default function PlayersName() {
  document.body.style.overflow = "hidden scroll";
  document.getElementById("root").style.height = "fit-content";
  return (
    <div className="players_name_container">
      <NavBar />
      <Content />

      <img className="backgroundImage" src={mapImg} alt="blue map background" />
    </div>
  );
}
