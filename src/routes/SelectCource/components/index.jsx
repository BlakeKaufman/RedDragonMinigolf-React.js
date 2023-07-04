import altLogo from "../../../assets/images/altLogo.webp";
import CourseBox from "./courseBox";

const courses = [
  {
    name: "maraunders Challenge",
    id: 1,
    isAda: false,
  },
  {
    name: "the pirates plank",
    id: 2,
    isAda: true,
  },
];

export default function Content() {
  function setCourse(id) {
    const [selectedCourse] = courses.filter((course) => course.id === id);

    const game = JSON.parse(localStorage.getItem("RedDragonGolf"));

    game.courseName =
      selectedCourse.id === 1 ? courses[0].name : courses[1].name;
    game.isAda = selectedCourse.id === 1 ? courses[0].isAda : courses[1].isAda;

    localStorage.setItem("RedDragonGolf", JSON.stringify(game));

    window.open("http://localhost:5173/playersName", "_self");
  }
  const courseElements = courses.map((course) => (
    <CourseBox handleClick={setCourse} key={course.id} {...course} />
  ));

  return (
    <div className="select_course_content">
      <img className="altLogo" src={altLogo} alt="Red Dragon cove logo" />
      <h1>Select Course</h1>
      <div className="courses_container">{courseElements}</div>
    </div>
  );
}
