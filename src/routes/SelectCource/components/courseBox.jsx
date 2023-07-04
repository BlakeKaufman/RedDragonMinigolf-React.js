import backgroundImg from "../../../assets/images/DragonBoat.webp";

export default function CourseBox(props) {
  return (
    <div
      onClick={() => props.handleClick(props.id)}
      className="course_selector"
    >
      <span>{props.name}</span>
      <img src={backgroundImg} alt="dragon boat background image" />
    </div>
  );
}
