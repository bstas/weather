import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import ErrorBoundary from "./services/ErrorBoundary";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <GlobalStyle />
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
