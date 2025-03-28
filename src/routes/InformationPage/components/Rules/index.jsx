import "./index.css";

export default function Rules() {
  return (
    <>
      <h2 className="rules_title">the pirate's code</h2>
      <div className="rules">
        <div className="maxSize">
          <h3>maximum group size</h3>
          <p>No More than 6 players. Play in groups of 6 or less.</p>
        </div>
        <div className="teeOff">
          <h3>tee off</h3>
          <p>
            All players in a group hit thier first shots, then proceed togehter
            to thier next shot
          </p>
        </div>
        <div className="strokeLimit">
          <h3>Stroke Limit</h3>
          <p>Six per hole for each player.</p>
        </div>
        <div className="outOfBounds">
          <h3>Out of bounds</h3>
          <p>Place ball back in play, where it went out. One stoke penalty</p>
        </div>
        <div className="Obstacles">
          <h3>Obstacles</h3>
          <p>
            If side rail or object pervents putting, you may move the ball one
            club head away.
          </p>
        </div>
        <div className="safety pb">
          <h3>Safety</h3>
          <p>
            Please stay on the sidewalk for the saftey of yourself and others.
            No full swings with putters. No rock cling.
          </p>
        </div>
      </div>
    </>
  );
}
