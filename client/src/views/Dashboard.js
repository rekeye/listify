import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

//#region styled components

//#endregion

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getMyTopArtists()
      .then(({ body: { items } }) => {
        setTopArtists(items);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }, [accessToken]);

  console.log(topArtists);

  return <div></div>;
};

export default Dashboard;
