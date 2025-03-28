import map from "../../assets/images/map.webp";
import logo from "/Logo.webp";
import "./index.css";
import NavBar from "../../components/NavBar";
import SafeAreaWrapper from "../../components/safeAreaWrapper";
import GlobalContentWrapper from "../../components/globalWapper";
import Rules from "./components/Rules";
import Waiver from "./components/Waiver";

export default function InformationPage({ wantedContent }) {
  return (
    <>
      <GlobalContentWrapper className="information_container">
        <NavBar />
        <SafeAreaWrapper
          className={
            wantedContent == "rules" ? "rules_container" : "waiver_container"
          }
        >
          <img id="skullLogo" src={logo} alt="logo" />
          <div className="text_container">
            {wantedContent === "rules" ? <Rules /> : <Waiver />}
          </div>
        </SafeAreaWrapper>
      </GlobalContentWrapper>
      <img id="backgroundImg" src={map} alt="blue map background image" />
    </>
  );
}
