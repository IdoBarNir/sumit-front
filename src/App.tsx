import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";

import NavigationProvider from "./components/NavigationContext/NavigationContextProvider";
import MainRoutes from "./Routes/MainRoutes";
import globalStyles from "./styles/globalStyles";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <NavigationProvider>
        <MainRoutes />
      </NavigationProvider>
    </BrowserRouter>
  );
};

export default App;
