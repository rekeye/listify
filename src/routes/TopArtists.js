import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SpotifyWebApi from "spotify-web-api-node";
import Artist from "../components/Artist";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

//#region styled components
const Container = styled.section`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 1em;
  }
`;
//#endregion

const TopArtists = ({ accessToken }) => {
  const [topArtists, setTopArtists] = useState([]);

  //#region api calls
  useEffect(() => {
    if (!accessToken) return;

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

export default TopArtists;
