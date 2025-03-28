import Content from "./components";
import "./index.css";
import shipImg from "../../assets/images/DragonBoat.webp";
import SafeAreaWrapper from "../../components/safeAreaWrapper";

export default function LoadingPage() {
  const root = document.getElementById("root");
  root.style.backgroundImage = `url(${shipImg})`;
  return (
    <>
      <SafeAreaWrapper className={"landingPage"}>
        <Content />
      </SafeAreaWrapper>
    </>
  );
}
