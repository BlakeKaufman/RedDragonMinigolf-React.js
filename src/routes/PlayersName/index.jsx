import NavBar from "../../components/NavBar";
import Content from "./components/index";
import mapImg from "../../assets/images/map.webp";
import "./index.css";
import GlobalContentWrapper from "../../components/globalWapper";

export default function PlayersName() {
  return (
    <>
      <GlobalContentWrapper className="players_name_container">
        <NavBar />
        <Content />
      </GlobalContentWrapper>
      <img id="backgroundImg" src={mapImg} alt="blue map background" />
    </>
  );
}
