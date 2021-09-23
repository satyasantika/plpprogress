import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Index";
import Penilaian from "../views/plp1/dosen/Penilaian";
import Observasi from "../views/plp1/mahasiswa/Observasi";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/plp1/dosen/penilaian">
        <Penilaian />
      </Route>
      <Route path="/plp1/mahasiswa/observasi">
        <Observasi />
      </Route>
    </Switch>
  );
}

export default Router;
