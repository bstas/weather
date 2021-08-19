import React, { FC } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Switch, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path={["/login", "/registration"]} component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
