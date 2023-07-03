export default function Popup(props) {
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
      onClick={() => props.clearPopup()}
      style={popupStyle}
      className="popup_container"
    >
      <div className="popup_content">
        <span>{props.text}</span>
      </div>
    </div>
  );
}
