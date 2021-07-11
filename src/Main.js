import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SpotifyWebApi from "spotify-web-api-node";
import { Route, Switch } from "react-router";
import Dashboard from "./routes/Dashboard/Dashboard";
import TopArtists from "./routes/TopArtists/TopArtists";
import Creator from "./routes/Creator/Creator";
import CreatorSuccess from "./routes/CreatorSuccess/CreatorSuccess";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
});

const Main = ({ accessToken }) => {
  const [user, setUser] = useState({
    display_name: "",
    images: [{ url: "" }],
  });
  const [playlists, setPlaylists] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  //console.log(playlists);

  //#region api calls
  useEffect(() => {
    if (accessToken === null) return;

    spotifyApi.setAccessToken(accessToken);

    //user's top artists
    spotifyApi
      .getMyTopArtists({ limit: 24 })
      .then(({ body: { items } }) => setTopArtists(items))
      .catch((err) => console.log("Something went wrong!", err));

    //all playlists of the user
    spotifyApi
      .getMe()
      .then(({ body }) => {
        setUser(body);
        return body.id;
      })
      .then((userId) => spotifyApi.getUserPlaylists(userId))
      .then(({ body: { items } }) => setPlaylists(items))
      .catch((err) => console.log("Something went wrong!", err));
  }, [accessToken]);
  //#endregion

  return (
    <Switch>
      <Route exact path='/'>
        <Dashboard
          user={user}
          playlists={playlists}
          topArtistsMini={topArtists.slice(0, 3)}
        />
      </Route>
      <Route exact path='/top-artists'>
        <TopArtists topArtists={topArtists.slice(0, 10)} />
      </Route>
      <Route exact path='/create'>
        <Creator accessToken={accessToken} topArtists={topArtists} />
      </Route>
      <Route
        exact
        path='/create-success'
        render={(props) => <CreatorSuccess {...props} />}
      />
    </Switch>
  );
};

Main.propTypes = {
  accessToken: PropTypes.string,
};

Main.defaultProps = {
  accessToken: "",
};

export default Main;
