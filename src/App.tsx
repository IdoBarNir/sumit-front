import { FC, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import QueuePage from "./Pages/QueuePage/QueuePage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import GamePage from "./Pages/GamePage/GamePage";
import ConclusionPage from "./Pages/ConclusionPage/ConclusionPage";

const App: FC = () => {
  const [playerEmail, setPlayerEmail] = useState("");
  const [conclusion, setConclusion] = useState("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WelcomePage
              playerEmail={playerEmail}
              setPlayerEmail={setPlayerEmail}
            />
          }
        />
        <Route
          path="/queue"
          element={<QueuePage playerEmail={playerEmail} />}
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/game"
          element={<GamePage setConclusion={setConclusion} />}
        />
        <Route
          path="/conclusion"
          element={<ConclusionPage conclusion={conclusion} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
