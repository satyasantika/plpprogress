import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Index";
import Penilaian1 from "../views/plp1/dosen/Penilaian";
import Dinilai1 from "../views/plp1/mahasiswa/Dinilai";
import Observasi from "../views/plp1/mahasiswa/Observasi";
import Yudisium1 from "../views/plp1/yudisium";
import YudisiumMapel1 from "../views/plp1/yudisium/Mapel";
import PenilaianDosen2 from "../views/plp2/dosen/Penilaian";
import PenilaianGuru2 from "../views/plp2/guru/Penilaian";
import Dinilai2 from "../views/plp2/mahasiswa/Dinilai";
import Yudisium2 from "../views/plp2/yudisium";
import YudisiumMapel2 from "../views/plp2/yudisium/Mapel";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/plp1/dosen/penilaian">
        <Penilaian1 />
      </Route>
      <Route path="/plp1/mahasiswa/observasi">
        <Observasi />
      </Route>
      <Route path="/plp1/mahasiswa/dinilai">
        <Dinilai1 />
      </Route>
      <Route exact path="/plp1/yudisium">
        <Yudisium1 />
      </Route>
      <Route path="/plp1/yudisium/:mapelId">
        <YudisiumMapel1 />
      </Route>
      <Route path="/plp2/dosen/penilaian">
        <PenilaianDosen2 />
      </Route>
      <Route path="/plp2/guru/penilaian">
        <PenilaianGuru2 />
      </Route>
      <Route path="/plp2/mahasiswa/dinilai">
        <Dinilai2 />
      </Route>
      <Route exact path="/plp2/yudisium">
        <Yudisium2 />
      </Route>
      <Route path="/plp2/yudisium/:mapelId">
        <YudisiumMapel2 />
      </Route>
    </Switch>
  );
}

export default Router;
