import map from "../../assets/images/map.webp";
import logo from "../../assets/images/logo.webp";

import "./index.css";
import NavBar from "../../components/NavBar";
export default function Waiver() {
  console.log(document.referrer);
  return (
    <>
      <div className="waiver_container">
        <NavBar />
        <img className="logo" src={logo} alt="logo" />
        <div className="text">
          <h2>waiver</h2>
          <div className="rules">
            <div className="header_text">
              <h4>R E A D </h4>
              <h4>C A R E F U L LY</h4>
            </div>
            <h5>
              All who enter these premises voluntarily assume all risk–including
              injury to person and property– that may be caused while at Red
              Dragon’s Cove. Our guests agree to hold Red Dragon’s Cove harmless
              against all claims resulting from such injuries. This waiver
              includes all claims based on negligence, action, or inaction of
              the above parties. <br />
              <br />
              Warning–the uneven terrain that makes this course enjoyable can
              add to the risk of injury from falling. Climbing stairs and
              negotiating irregular surfaces requires a reasonable level of
              physical conditioning. Avoid this activity if you are not in good
              physical health, or have a medical condition that would prevent
              your safe participation. Play at your own risk, but please: watch
              your step, wear flats, refrain from distracting cell phone use
              while walking, and avoid horseplay.
            </h5>
          </div>
        </div>
        <img
          className="backgroundImg"
          src={map}
          alt="blue map background image"
        />
      </div>
    </>
  );
}
