import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";

const App: React.FC = () => (
  <>
    <ToastContainer />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
