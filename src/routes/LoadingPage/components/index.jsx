import { useNavigate } from "react-router-dom";
import logo from "/Logo.webp";

export default function Content() {
  const navigate = useNavigate();
  function setGame() {
    const game = {
      courseName: "",
      isAda: "",
      Players: [],
    };
    localStorage.setItem("RedDragonGolf", JSON.stringify(game));
    navigate("/selectCource");
  }
  return (
    <>
      <img id="skullLogo" src={logo} alt="Red dragon adventure golf logo" />
      <span className="glowing-border" onClick={setGame}>
        Start Round
      </span>
    </>
  );
}
