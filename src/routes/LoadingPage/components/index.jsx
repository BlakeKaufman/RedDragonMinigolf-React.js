import logo from "../../../assets/images/Logo.webp";

export default function Content() {
  function setGame() {
    const game = {
      courseName: "",
      isAda: "",
      Players: [],
    };
    localStorage.setItem("RedDragonGolf", JSON.stringify(game));

    window.open("https://rdadventuregolf.netlify.app/selectCource", "_self");
  }
  return (
    <div className="content">
      <img className="logo" src={logo} alt="logo" />
      <span className="glowing-border" onClick={setGame}>
        Start Round
      </span>
    </div>
  );
}
