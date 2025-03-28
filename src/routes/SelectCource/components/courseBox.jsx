export default function CourseBox(props) {
  return (
    <div
      onClick={() => props.handleClick(props.id)}
      className="course_selector"
    >
      <span>{props.name}</span>
    </div>
  );
}
