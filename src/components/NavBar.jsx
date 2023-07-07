import { useState } from "react";
import menuOpen from "../assets/icons/menuOpen.svg";
import menuClose from "../assets/icons/menuClose.svg";
import mapIcon from "../assets/icons/map.svg";
import arrowRight from "../assets/icons/arrowRight.svg";
import arrowRightOrange from "../assets/icons/arrowRightOrange.svg";

import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar(props) {
  const [navState, setNavState] = useState(false);

  function showNav() {
    setNavState((prevState) => !prevState);
  }

  const navStyles = {
    right: navState ? "0" : "-100%",
  };

  const scoreCardStyles = {
    justifyContent: props.name === "scoreCard" ? "space-between" : "right",
  };
  const numberBackColor = {
    backgroundColor: props.courseNumber === 1 ? "orange" : "lightblue",
  };
  const numberSpanColor = {
    color: props.courseNumber === 1 ? "white" : "black",
  };

  return (
    <nav style={scoreCardStyles} id="nav">
      {props.name === "scoreCard" && (
        <div className="scoreCardNav">
          <span>Course</span>
          <div style={numberBackColor} className="number">
            <span style={numberSpanColor}>{props.courseNumber}</span>
          </div>
        </div>
      )}
      <ul id="nav-items" style={navStyles}>
        <div className="CouseMap-img">
          <img src={mapIcon} alt="map icon" />
          <h3>COURSE MAP</h3>
        </div>
        <div className="list-style">
          <img src={arrowRightOrange} alt="map icon" />
          <li>
            <Link to="/selectCource">SELECT COURSE</Link>
          </li>
        </div>
        {props.name === "scoreCard" && (
          <div className="list-style">
            <img src={arrowRightOrange} alt="map icon" />
            <li>
              <Link to="/leaderboard">LEADERBOARD</Link>
            </li>
          </div>
        )}
        {props.name === "leaderboard" && (
          <div className="list-style">
            <img src={arrowRightOrange} alt="map icon" />
            <li>
              <Link to="/scoreCard">SCORE CARD</Link>
            </li>
          </div>
        )}
        {/* <!--<div className="list-style">-->
            <!--    <img src="./images/reshot-icon-bold-right-arrow-STPW6DFVRY-7b0db.svg" alt="map icon">-->
            <!--    <li><a href="index.php?PageName=ScorecardMC">SCORE CARD</a></li>-->
            <!--</div>-->
            <!--<div className="list-style">-->
            <!--    <img src="./images/reshot-icon-bold-right-arrow-STPW6DFVRY-7b0db.svg" alt="map icon">-->
            <!--    <li><a href="#">LEADER BOARD</a></li>-->
            <!--</div>--> */}
        <div className="list-style">
          <img src={arrowRightOrange} alt="map icon" />
          <li>
            <Link to="/rules">RULES</Link>
          </li>
        </div>
        <div className="list-style">
          <img src={arrowRightOrange} alt="map icon" />
          <li>
            <Link to="/waiver">WAIVER</Link>
          </li>
        </div>
      </ul>
      <img
        onClick={showNav}
        className="disable-dbl-tap-zoom"
        id="mb-nav"
        src={navState ? menuClose : menuOpen}
        alt="Hamburger icon for navigation"
      />
    </nav>
  );
}
