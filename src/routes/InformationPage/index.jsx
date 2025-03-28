import map from "../../assets/images/map.webp";
import logo from "/Logo.webp";
import "./index.css";
import NavBar from "../../components/NavBar";
import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Rules from "./components/Rules";
import Waiver from "./components/Waiver";

export default function InformationPage({ wantedContent }) {
  const root = document.getElementById("root");
  root.style.backgroundImage = `url(${map})`;
  return (
    <>
      <NavBar />
      <SafeAreaWrapper
        className={`${
          wantedContent == "rules" ? "rules_container" : "waiver_container"
        } globalInformationContianer`}
      >
        <img id="skullLogo" src={logo} alt="logo" />
        <div className="text_container">
          {wantedContent === "rules" ? <Rules /> : <Waiver />}
        </div>
      </SafeAreaWrapper>
    </>
  );
}
