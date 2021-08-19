import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
  }
`

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle/>
        <App/>
    </BrowserRouter>,
    document.getElementById("root"));
