import NavBar from "../../components/NavBar";
import map from "../../assets/images/map.webp";
import logo from "../../assets/images/logo.webp";
import "./index.css";

export default function Rules() {
  return (
    <div className="rules_container">
      <NavBar />
      <img className="logo" src={logo} alt="logo" />
      <div className="text">
        <h2 className="rules_title">the pirate's code</h2>
        <div className="rules">
          <div className="maxSize">
            <h3>maximum group size</h3>
            <h4>No More than 6 players. Play in groups of 6 or less.</h4>
          </div>
          <div className="teeOff">
            <h3>tee off</h3>
            <h4>
              All players in a group hit thier first shots, then proceed
              togehter to thier next shot
            </h4>
          </div>
          <div className="strokeLimit">
            <h3>Stroke Limit</h3>
            <h4>Six per hole for each player.</h4>
          </div>
          <div className="outOfBounds">
            <h3>Out of bounds</h3>
            <h4>
              Place ball back in play, where it went out. One stoke penalty
            </h4>
          </div>
          <div className="Obstacles">
            <h3>Obstacles</h3>
            <h4>
              If side rail or object pervents putting, you may move the ball one
              club head away.
            </h4>
          </div>
          <div className="safety pb">
            <h3>Safety</h3>
            <h4>
              Please stay on the sidewalk for the saftey of yourself and others.
              No full swings with putters. No rock cling.
            </h4>
          </div>
        </div>
      </div>
      <img className="backgroundImg" src={map} alt="map background image" />
    </div>
  );
}
