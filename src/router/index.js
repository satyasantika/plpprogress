import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Index";
import Observasi from "../views/plp1/mahasiswa/Observasi";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/plp1/mahasiswa/observasi">
        <Observasi />
      </Route>
    </Switch>
  );
}

export default Router;
