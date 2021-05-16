import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SpotifyWebApi from "spotify-web-api-node";
import { Container } from "./TopArtists.styles";
import Artist from "../../components/Artist/Artist";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

const TopArtists = ({ accessToken }) => {
  const [topArtists, setTopArtists] = useState([]);

  //#region api calls
  useEffect(() => {
    if (accessToken.length === 0) return;

    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getMyTopArtists({ limit: 10 })
      .then(({ body: { items } }) => {
        setTopArtists(items);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }, [accessToken]);
  //#endregion

  return (
    <Container>
      <header>
        <h2>Your Top 10 Artists: </h2>
      </header>
      {topArtists.map((data, index) => (
        <Artist
          data={data}
          position={index % 2 === 0 ? "left" : "right"}
          index={index}
          key={data.name}
        />
      ))}
    </Container>
  );
};

TopArtists.propTypes = {
  accessToken: PropTypes.string,
};

TopArtists.defaultProps = {
  accessToken: "",
};

export default TopArtists;
