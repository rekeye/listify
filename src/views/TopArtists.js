import { useState, useEffect } from "react";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import Artist from "../components/Artist";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

//#region styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
//#endregion

const TopArtists = ({ code }) => {
  const accessToken = useAuth(code);
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

  if (topArtists.length > 0) console.log(topArtists);

  return (
    <Container>
      <h2>Your Top 10 Artists: </h2>
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
