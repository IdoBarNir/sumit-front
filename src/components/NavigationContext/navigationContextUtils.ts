import { ReactNode, createContext } from "react";

export type NavigationContextType = {
  hasNavigatedFromWelcome: boolean;
  setHasNavigatedFromWelcome: (value: boolean) => void;
};

export const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

export type NavigationProviderProps = {
  children: ReactNode;
};
