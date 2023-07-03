import NavBar from "../../components/NavBar";
import Content from "./components";
import oceanImg from "../../assets/images/Ocean.webp";
import "./index.css";

export default function SelectCource() {
  return (
    <>
      <NavBar />
      <Content />
      <img
        className="oceanBackground"
        src={oceanImg}
        alt="ocean background img"
      />
    </>
  );
}
