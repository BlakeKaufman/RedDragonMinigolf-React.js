import { useCallback, useState } from "react";
import menuOpen from "../assets/icons/menuOpen.svg";
import menuClose from "../assets/icons/menuClose.svg";
import mapIcon from "../assets/icons/map.svg";
import arrowRight from "../assets/icons/arrowRight.svg";
import arrowRightOrange from "../assets/icons/arrowRightOrange.svg";

import { Link, useNavigate } from "react-router-dom";

import "./NavBar.css";

export default function NavBar(props) {
  const navigate = useNavigate();
  const [navState, setNavState] = useState(false);

  const showNav = useCallback(() => {
    setNavState((prevState) => !prevState);
  }, [setNavState]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  const handleNavigation = useCallback((routePath) => {
    console.log(routePath, routePath.includes("selectCource"));
    navigate(routePath, { replace: routePath.includes("selectCource") });
    setNavState(false);
  }, []);

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
      <div className="navContainer">
        {props.name !== "scoreCard" ? (
          <img
            onClick={goBack}
            className="disable-dbl-tap-zoom"
            id="goBackNav"
            src={arrowRight}
            alt="Hamburger icon for navigation"
          />
        ) : (
          <div className="scoreCardNav">
            <span>Course</span>
            <div style={numberBackColor} className="number">
              <span style={numberSpanColor}>{props.courseNumber}</span>
            </div>
          </div>
        )}
        <img
          onClick={showNav}
          className="disable-dbl-tap-zoom"
          id="mb-nav"
          src={navState ? menuClose : menuOpen}
          alt="Hamburger icon for navigation"
        />
      </div>

      <ul id="nav-items" style={navStyles}>
        <div className="CouseMap-img">
          <img src={mapIcon} alt="map icon" />
          <h3>COURSE MAP</h3>
        </div>
        <div className="list-style">
          <img src={arrowRightOrange} alt="map icon" />
          <li onClick={() => handleNavigation("/selectCource")}>
            SELECT COURSE
          </li>
        </div>
        {props.name === "scoreCard" && (
          <div className="list-style">
            <img src={arrowRightOrange} alt="map icon" />
            <li onClick={() => handleNavigation("/leaderboard")}>
              LEADERBOARD
            </li>
          </div>
        )}
        {props.name === "leaderboard" && (
          <div className="list-style">
            <img src={arrowRightOrange} alt="map icon" />
            <li onClick={() => handleNavigation("/scoreCard")}>SCORE CARD</li>
          </div>
        )}
        <div className="list-style">
          <img src={arrowRightOrange} alt="map icon" />
          <li className="formPages" onClick={() => handleNavigation("/rules")}>
            RULES
          </li>
        </div>
        <div className="list-style">
          <img src={arrowRightOrange} alt="map icon" />
          <li className="formPages" onClick={() => handleNavigation("/waiver")}>
            WAIVER
          </li>
        </div>
      </ul>
    </nav>
  );
}
