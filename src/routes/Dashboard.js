import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

const Dashboard = ({ accessToken }) => {
  const [topArtists, setTopArtists] = useState([]);

  //#region api calls
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getMyTopArtists({ limit: 3 })
      .then(({ body: { items } }) => {
        setTopArtists(items);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }, [accessToken]);
  //#endregion

  if (topArtists.length > 0) console.log(topArtists);

  return (
    <div>
      <a href='/top-artists'>top artists</a>
    </div>
  );
};

export default Dashboard;
