import { ReactNode, createContext } from "react";

export interface NavigationContextType {
  hasNavigatedFromWelcome: boolean;
  setHasNavigatedFromWelcome: (value: boolean) => void;
}

export const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

export interface NavigationProviderProps {
  children: ReactNode;
}
