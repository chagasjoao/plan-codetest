import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { PlanContextProvider } from "./contexts/PlanContext";

import Routes from "./routes";

const App: React.FC = () => (
  <PlanContextProvider>
    <ToastContainer />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </PlanContextProvider>
);

export default App;
