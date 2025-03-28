import { useCallback, useMemo, useState } from "react";
import altLogo from "/altLogo.webp";
import NameCard from "./NameCard";
import Popup from "../../../components/Popup";
import SubmitButton from "../../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import createScoreArray from "../../../functions/scoreArray";
import SafeAreaWrapper from "../../../components/safeAreaWrapper";

export default function Content() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "",
      score: createScoreArray(),
    },
    {
      id: 2,
      name: "",
      score: createScoreArray(),
    },
    {
      id: 3,
      name: "",
      score: createScoreArray(),
    },
    {
      id: 4,
      name: "",
      score: createScoreArray(),
    },
    {
      id: 5,
      name: "",
      score: createScoreArray(),
    },
    {
      id: 6,
      name: "",
      score: createScoreArray(),
    },
  ]);
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);

  const submitForm = useCallback(() => {
    const filledPlayers = players.filter((player) =>
      player.name ? player : null
    );

    if (filledPlayers.length != 0) {
      const game = JSON.parse(localStorage.getItem("RedDragonGolf"));

      game.Players = filledPlayers;

      localStorage.setItem("RedDragonGolf", JSON.stringify(game));

      navigate("/scoreCard", { replace: true });
    } else {
      setIsPopupDisplayed(true);
    }
  }, [setIsPopupDisplayed, players, navigate]);

  const getPlayers = useCallback(
    (event, id) => {
      const content = event.target.value;

      setPlayers((prevArr) => {
        return prevArr.map((player) =>
          player.id === id ? { ...player, name: content } : player
        );
      });
    },
    [setPlayers]
  );

  const clearPopup = useCallback(() => {
    setIsPopupDisplayed(false);
  }, []);

  const inputElements = useMemo(() => {
    return players.map((player) => (
      <NameCard handleForm={getPlayers} key={player.id} id={player.id} />
    ));
  }, [players]);

  return (
    <SafeAreaWrapper className="players_name_container">
      <img id="fullTextLogo" src={altLogo} alt="red dragon logo" />
      <h1>Enter Players</h1>
      {inputElements}

      <SubmitButton functionName={submitForm} content="Begin" />
      <Popup
        clearPopup={clearPopup}
        isDisplayed={isPopupDisplayed}
        text="Please Enter Players Name"
      />
    </SafeAreaWrapper>
  );
}
