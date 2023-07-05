export default function (props) {
  return (
    <span onClick={props.functionName} className="submit_BTN">
      {props.content}
    </span>
  );
}
