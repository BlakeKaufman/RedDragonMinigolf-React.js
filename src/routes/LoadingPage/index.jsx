import Content from "./components";
import "./index.css";
import shipImg from "../../assets/images/DragonBoat.webp";

export default function LoadingPage() {
  return (
    <>
      <Content />
      <img
        className="backgroundImg"
        src={shipImg}
        alt="background image of a ship wih a dragon spraying fire"
      />
    </>
  );
}
