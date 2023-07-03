import logo from "../../../assets/images/altLogo.webp";
export default function Content(props) {
  console.log(props);
  const headingColorStyles = {
    color: !props.isAda ? "orange" : "lightblue",
  };
  return (
    <div className="scoreCard_content_container">
      <img src={logo} alt="red dragon logo" className="logo" />
      <h1 style={headingColorStyles}>{props.courseName.toUpperCase()}</h1>
      <div class="grid-container">
        <div class="grid-items hole mb-2 static">Hole</div>
        <div class="grid-items par mb-2 static">Par</div>
        <div class="grid-items th mb-2 static gray">
          <span>Blake</span>
        </div>
        <div class="grid-items th mb-2 static gray">Brad</div>
        <div class="grid-items th mb-2 static gray">Ben</div>
      </div>
    </div>
  );
}
