import { FC, useState } from "react";
import {
  NavigationContext,
  NavigationProviderProps,
} from "./navigationContextUtils";

const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
  const [hasNavigatedFromWelcome, setHasNavigatedFromWelcome] = useState(false);

  return (
    <NavigationContext.Provider
      value={{ hasNavigatedFromWelcome, setHasNavigatedFromWelcome }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
