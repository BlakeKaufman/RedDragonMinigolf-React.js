import flag from "../../../assets/images/flag.webp";

export default function LeaderBoardCard(props) {
  console.log(props);
  return (
    <div className="inputContainer">
      <span className="playerScore">{props.total_score}</span>
      <div className="flagContainer">
        <img src={flag} alt="pirates flag for player id" />
        <div className="player_list_container">
          <span className="player">{props.name}</span>
        </div>
      </div>
    </div>
  );
}
