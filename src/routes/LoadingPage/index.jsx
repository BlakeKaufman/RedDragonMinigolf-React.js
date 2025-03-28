import Content from "./components";
import "./index.css";
import shipImg from "../../assets/images/DragonBoat.webp";
import SafeAreaWrapper from "../../components/safeAreaWrapper";

export default function LoadingPage() {
  return (
    <>
      <SafeAreaWrapper className={"landingPage"}>
        <Content />
      </SafeAreaWrapper>
      <img
        id="backgroundImg"
        src={shipImg}
        alt="background image of a ship wih a dragon spraying fire"
      />
    </>
  );
}
