import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Index";
import Penilaian from "../views/plp1/dosen/Penilaian";
import Dinilai from "../views/plp1/mahasiswa/Dinilai";
import Observasi from "../views/plp1/mahasiswa/Observasi";
import Yudisium1 from "../views/plp1/yudisium";
import YudisiumMapel1 from "../views/plp1/yudisium/Mapel";

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
      <Route path="/plp1/mahasiswa/dinilai">
        <Dinilai />
      </Route>
      <Route exact path="/plp1/yudisium">
        <Yudisium1 />
      </Route>
      <Route path="/plp1/yudisium/:mapelId">
        <YudisiumMapel1 />
      </Route>
    </Switch>
  );
}

export default Router;
