import { useEffect } from "react";
import { leaveQueue } from "../../api/api";

const useLeaveQueueBeforeUnload = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", leaveQueue);

    return () => {
      window.removeEventListener("beforeunload", leaveQueue);
    };
  }, []);
};

export default useLeaveQueueBeforeUnload;
