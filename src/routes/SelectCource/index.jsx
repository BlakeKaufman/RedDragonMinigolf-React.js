import Content from "./components";
import oceanImg from "../../assets/images/Ocean.webp";
import "./index.css";
import NavBar from "../../components/NavBar";

export default function SelectCource() {
  const root = document.getElementById("root");
  root.style.backgroundImage = `url(${oceanImg})`;
  return (
    <>
      <NavBar />
      <Content />
    </>
  );
}
