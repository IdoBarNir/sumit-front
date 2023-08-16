import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useNavigationContext } from "../components/NavigationContext/NavigationContext";

interface GuardedRouteProps {
  element: React.ReactNode;
}

const GuardedRoute: FC<GuardedRouteProps> = ({ element }) => {
  const { hasNavigatedFromWelcome } = useNavigationContext();

  if (!hasNavigatedFromWelcome) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default GuardedRoute;
