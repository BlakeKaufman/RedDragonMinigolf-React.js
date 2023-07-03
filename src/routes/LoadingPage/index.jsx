import NavBar from "../../components/NavBar";
import Content from "./components";
import "./index.css";
import shipImg from "../../assets/images/DragonBoat.webp";

export default function LoadingPage() {
  return (
    // <div className="LoadingPage">
    <>
      <NavBar page="loadingPage" />
      <Content />
      <img
        className="backgroundImg"
        src={shipImg}
        alt="background image of a ship wih a dragon spraying fire"
      />
    </>
    // </div>
  );
}
