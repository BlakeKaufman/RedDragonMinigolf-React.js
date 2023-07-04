import coin from "../../../assets/images/scoreSelector.webp";
export default function ScoreSelector(props) {
  const root = document.getElementById("root");
  if (props.isDisplayed) {
    root.style.overflow = "hidden";
    root.scrollTo({
      top: 0,
      left: 0,
    });
  } else {
    root.style.overflowY = "scroll";
  }
  const popupStyle = {
    display: props.isDisplayed ? "flex" : "none",
  };
  return (
    <div
      onClick={(event) => props.setScore(event)}
      style={popupStyle}
      className="popup_container"
    >
      <div className="popup_content">
        <div className="score">0</div>
        <div className="score">1</div>
        <div className="score">2</div>
        <div className="score">3</div>
        <div className="score">4</div>
        <div className="score">5</div>
        <div className="score">6</div>
        <img
          src={coin}
          alt="coin for score selector"
          className="backgroundImg"
        />
      </div>
    </div>
  );
}
