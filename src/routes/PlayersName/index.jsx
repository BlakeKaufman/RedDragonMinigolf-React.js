import NavBar from "../../components/NavBar";
import Content from "./components/index";
import mapImg from "../../assets/images/map.webp";
import "./index.css";

export default function PlayersName() {
  const root = document.getElementById("root");
  root.style.backgroundImage = `url(${mapImg})`;
  return (
    <>
      <NavBar />
      <Content />
    </>
  );
}
