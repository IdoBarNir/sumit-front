import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { leaveQueue } from "../api/api";

const useBackButtonRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", window.location.pathname);

    const handleBackButtonEvent = (e: PopStateEvent) => {
      e.preventDefault();
      leaveQueue();
      navigate("/");
    };

    window.addEventListener("popstate", handleBackButtonEvent);

    return () => {
      window.removeEventListener("popstate", handleBackButtonEvent);
    };
  }, [navigate]);
};
export default useBackButtonRedirect;
