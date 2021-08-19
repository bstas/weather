import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
