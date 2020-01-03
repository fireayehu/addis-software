import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App";
import { store } from "./redux/store";

import { theme } from "./theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
