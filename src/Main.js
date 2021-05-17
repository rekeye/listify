import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SpotifyWebApi from "spotify-web-api-node";
import { Route, Switch } from "react-router";
import Dashboard from "./routes/Dashboard/Dashboard";
import TopArtists from "./routes/TopArtists/TopArtists";
import PlaylistCreator from "./routes/PlaylistCreator/PlaylistCreator";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

const Main = ({ accessToken }) => {
  const [user, setUser] = useState({
    display_name: "",
    images: [{ url: "" }],
  });
  const [playlists, setPlaylists] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topArtistsMini, setTopArtistsMini] = useState([]);

  //#region api calls
  useEffect(() => {
    if (accessToken === null) return;

    spotifyApi.setAccessToken(accessToken);

    //user's top artists
    spotifyApi
      .getMyTopArtists({ limit: 20 })
      .then(({ body: { items } }) => {
        setTopArtists(items);
        setTopArtistsMini(items.slice(0, 3));
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });

    //all playlists of the user
    spotifyApi
      .getMe()
      .then(({ body }) => {
        setUser(body);
        return body.id;
      })
      .then((userId) => spotifyApi.getUserPlaylists(userId))
      .then(({ body: { items } }) => setPlaylists(items))
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }, [accessToken]);
  //#endregion

  return (
    <Switch>
      <Route exact path='/'>
        <Dashboard
          user={user}
          playlists={playlists}
          topArtistsMini={topArtistsMini}
        />
      </Route>
      <Route exact path='/top-artists'>
        <TopArtists topArtists={topArtists} />
      </Route>
      <Route exact path='/create-playlist'>
        <PlaylistCreator />
      </Route>
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
