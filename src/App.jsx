import { Route, Routes } from "react-router-dom";
import LoadingPage from "./routes/LoadingPage";
import SelectCource from "./routes/SelectCource";
import PlayersName from "./routes/PlayersName";
import ScoreCard from "./routes/ScoreCard";
import Leaderboard from "./routes/Leaderboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/selectCource" element={<SelectCource />} />
      <Route path="/playersName" element={<PlayersName />} />
      <Route path="/scoreCard" element={<ScoreCard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
