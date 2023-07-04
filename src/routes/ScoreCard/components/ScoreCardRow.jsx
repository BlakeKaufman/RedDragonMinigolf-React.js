export default function Row(props) {
  let playersArr;
  let statsArr;

  if (props.id === 0) {
    playersArr = props.game.Players.map((player) => {
      return (
        <div key={player.id} className="grid-items th mb-2 static gray">
          <span>{player.name}</span>
        </div>
      );
    });
  } else if (props.id === "scoref" || props.id === "scoreb") {
    playersArr = props.game.Players.map((player) => {
      return (
        <div
          key={player.id}
          className={`grid-items score-row ${player.id} ${props.id}`}
        >
          <span>
            {props.id === "scoref"
              ? player.score.slice(0, 9).reduce((counter, peram) => {
                  return counter + peram.score;
                }, 0)
              : player.score.slice(9).reduce((counter, peram) => {
                  return counter + peram.score;
                }, 0)}
          </span>
        </div>
      );
    });
  } else {
    playersArr = props.game.Players.map((player) => {
      return (
        <div
          onClick={() => props.handleClick(player.id, props.id)}
          key={player.id}
          className={`grid-items ${
            props.id % 2 === 0 ? "dark-blue" : "light-blue"
          } ${player.id} ${props.id}`}
        >
          <span>{player.score[props.id - 1].score}</span>
        </div>
      );
    });
  }

  if (props.id === 0) {
    statsArr = (
      <>
        <div className="grid-items hole mb-2 y static">Hole</div>
        <div className="grid-items par mb-2 static">Par</div>
      </>
    );
  } else if (props.id === "scoref") {
    statsArr = (
      <>
        <div className="grid-items hole mb-2 static">Out</div>
        <div className="grid-items par mb-2 static">
          {props.game.isAda ? props.totals.frontAda : props.totals.frontNonAda}
        </div>
      </>
    );
  } else if (props.id === "scoreb") {
    statsArr = (
      <>
        <div className="grid-items hole mb-2 static">Out</div>
        <div className="grid-items par mb-2 static">
          {props.game.isAda ? props.totals.backAda : props.totals.backNonAda}
        </div>
      </>
    );
  } else {
    statsArr = (
      <>
        <div className="grid-items hole mb-2 static">{props.id}</div>
        <div className="grid-items par mb-2 static">
          {props.game.isAda ? props.ada : props.nonAda}
        </div>
      </>
    );
  }

  return (
    <>
      {statsArr}
      {playersArr}
    </>
  );
}
