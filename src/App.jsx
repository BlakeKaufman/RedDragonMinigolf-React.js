import { Route, Routes } from "react-router-dom";
import LoadingPage from "./routes/LoadingPage";
import SelectCource from "./routes/SelectCource";
import PlayersName from "./routes/PlayersName";
import ScoreCard from "./routes/ScoreCard";
import Leaderboard from "./routes/Leaderboard";
import InformationPage from "./routes/InformationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/selectCource" element={<SelectCource />} />
      <Route path="/playersName" element={<PlayersName />} />
      <Route path="/scoreCard" element={<ScoreCard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route
        path="/waiver"
        element={<InformationPage wantedContent={"waiver"} />}
      />
      <Route
        path="/rules"
        element={<InformationPage wantedContent={"rules"} />}
      />
    </Routes>
  );
}

export default App;
