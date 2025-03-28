import altLogo from "/altLogo.webp";
import CourseBox from "./courseBox";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { COURSE_LIST } from "../../../constants";
import SafeAreaWrapper from "../../../components/safeAreaWrapper";

export default function Content() {
  const navigate = useNavigate();
  function setCourse(id) {
    const [selectedCourse] = COURSE_LIST.filter((course) => course.id === id);

    const game = JSON.parse(localStorage.getItem("RedDragonGolf"));

    game.courseName =
      selectedCourse.id === 1 ? COURSE_LIST[0].name : COURSE_LIST[1].name;
    game.isAda =
      selectedCourse.id === 1 ? COURSE_LIST[0].isAda : COURSE_LIST[1].isAda;

    localStorage.setItem("RedDragonGolf", JSON.stringify(game));
    navigate("/playersName");
  }
  const courseElements = COURSE_LIST.map((course) => (
    <CourseBox handleClick={setCourse} key={course.id} {...course} />
  ));

  return (
    <SafeAreaWrapper className={"select_course_content"}>
      <img id="fullTextLogo" src={altLogo} alt="Red Dragon cove logo" />
      <h1>Select Course</h1>
      <div className="courses_container">{courseElements}</div>
    </SafeAreaWrapper>
  );
}
