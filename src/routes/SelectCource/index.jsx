import Content from "./components";
import oceanImg from "../../assets/images/Ocean.webp";
import "./index.css";

export default function SelectCource() {
  return (
    <>
      <Content />
      <img id="backgroundImg" src={oceanImg} alt="ocean background img" />
    </>
  );
}
