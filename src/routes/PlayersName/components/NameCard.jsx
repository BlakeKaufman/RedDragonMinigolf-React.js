import flag from "../../../assets/images/flag.webp";

export default function NameCard({ handleForm, id }) {
  return (
    <div key={id} className="inputContainer">
      <input
        onChange={(event) => handleForm(event, id)}
        type="text"
        placeholder={`player ${id} name`}
      ></input>
      <div className="flagContainer">
        <img src={flag} alt="pirates flag for player id" />
        <div className="player_list_container">
          <span className="player">Player</span>
          <span className="number">{id}</span>
        </div>
      </div>
    </div>
  );
}
