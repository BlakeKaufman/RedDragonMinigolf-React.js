import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Loading = lazy(() => import("./components/loadingscreen"));
const LoadingPage = lazy(() => import("./routes/LoadingPage"));
const SelectCource = lazy(() => import("./routes/SelectCource"));
const PlayersName = lazy(() => import("./routes/PlayersName"));
const ScoreCard = lazy(() => import("./routes/ScoreCard"));
const Leaderboard = lazy(() => import("./routes/Leaderboard"));
const InformationPage = lazy(() => import("./routes/InformationPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
