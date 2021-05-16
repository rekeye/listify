import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";
import Dashboard from "./routes/Dashboard/Dashboard";
import TopArtists from "./routes/TopArtists/TopArtists";

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

Main.propTypes = {
  accessToken: PropTypes.string,
};

Main.defaultProps = {
  accessToken: "",
};

export default Main;
