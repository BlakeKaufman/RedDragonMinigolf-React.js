import flag from "../../../assets/images/flag.webp";

export default function NameCard(props) {
  return (
    <div className="inputContainer">
      <input
        onChange={(event) => props.handleForm(event, props.id)}
        type="text"
        placeholder={`player ${props.id} name`}
      ></input>
      <div className="flagContainer">
        <img src={flag} alt="pirates flag for player id" />
        <div className="player_list_container">
          <span className="player">Player</span>
          <span className="number">{props.id}</span>
        </div>
      </div>
    </div>
  );
}
