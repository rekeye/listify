import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./routes/Dashboard";
import TopArtists from "./routes/TopArtists";

const Main = ({ accessToken }) => (
  <Switch>
    <Route exact path='/'>
      <Dashboard accessToken={accessToken} />
    </Route>
    <Route exact path='/top-artists'>
      <TopArtists accessToken={accessToken} />
    </Route>
  </Switch>
);
export default Main;
