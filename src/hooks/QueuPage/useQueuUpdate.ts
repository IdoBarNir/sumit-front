import { useEffect } from "react";
import { NavigateFunction } from "react-router-dom";

import { joinQueue, onUpdateQueue, turnUpdateQueueOff } from "../../api/api";

const useQueueUpdate = (
  playerEmail: string,
  setQueue: (queue: string[]) => void,
  navigate: NavigateFunction
) => {
  useEffect(() => {
    onUpdateQueue((updatedQueue: string[]) => {
      setQueue(updatedQueue);
      if (updatedQueue[0] === playerEmail) {
        navigate("/game", { replace: true });
      }
    });

    joinQueue(playerEmail);

    return () => {
      turnUpdateQueueOff();
    };
  }, [navigate, playerEmail, setQueue]);
};

export default useQueueUpdate;
