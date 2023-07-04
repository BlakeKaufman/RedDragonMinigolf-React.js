import logo from "../../../assets/images/Logo.webp";

export default function Content() {
  function setGame() {
    const game = {
      courseName: "",
      isAda: "",
      Players: [],
    };
    localStorage.setItem("RedDragonGolf", JSON.stringify(game));

    window.open("http://localhost:5173/selectCource", "_self");
  }
  return (
    <div className="content">
      <img className="logo" src={logo} alt="" />
      <span onClick={setGame}>Start Round</span>
    </div>
  );
}
