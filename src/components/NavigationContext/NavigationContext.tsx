import { useContext } from "react";
import {
  NavigationContext,
  NavigationContextType,
} from "./navigationContextUtils";

export const useNavigationContext = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider"
    );
  }
  return context;
};
