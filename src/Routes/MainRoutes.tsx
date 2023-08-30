import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import { useNavigationContext } from "../components/NavigationContext/NavigationContext";
import GuardedRoute from "./GuardedRoute";
import QueuePage from "../Pages/QueuePage/QueuePage";
import AdminPage from "../Pages/AdminPage/AdminPage";
import GamePage from "../Pages/GamePage/GamePage";
import ConclusionPage from "../Pages/ConclusionPage/ConclusionPage";

const MainRoutes: FC = () => {
  const [playerEmail, setPlayerEmail] = useState("");
  const [isWin, setIsWin] = useState(false);
  const [conclusion, setConclusion] = useState("");

  const { setHasNavigatedFromWelcome } = useNavigationContext();

  const handleWelcomeCompletion = () => {
    setHasNavigatedFromWelcome(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <WelcomePage
            playerEmail={playerEmail}
            setPlayerEmail={setPlayerEmail}
            onCompletion={handleWelcomeCompletion}
          />
        }
      />
      <Route
        path="/queue"
        element={
          <GuardedRoute element={<QueuePage playerEmail={playerEmail} />} />
        }
      />
      <Route path="/admin" element={<GuardedRoute element={<AdminPage />} />} />
      <Route
        path="/game"
        element={
          <GuardedRoute
            element={
              <GamePage setConclusion={setConclusion} setIsWin={setIsWin} />
            }
          />
        }
      />
      <Route
        path="/conclusion"
        element={
          <GuardedRoute
            element={<ConclusionPage conclusion={conclusion} isWin={isWin} />}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
