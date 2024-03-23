import { useEffect } from "react";
import { leaveQueue } from "../../api/api";

const useLeaveQueueBeforeUnload = () => {
  useEffect(() => {
    console.log("useLeaveQueueBeforeUnload1");

    window.addEventListener("beforeunload", leaveQueue);

    return () => {
      console.log("useLeaveQueueBeforeUnload2");

      window.removeEventListener("beforeunload", leaveQueue);
    };
  }, []);
};

export default useLeaveQueueBeforeUnload;
