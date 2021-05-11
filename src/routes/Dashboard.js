import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SpotifyWebApi from "spotify-web-api-node";
import MiniArtist from "../components/MiniArtist";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

const LinkBtn = styled.div`
  background: var(--base-dark-green);
  padding: 0.5em;
  margin: 0.5em 0;
  text-align: center;
  font-size: 1.4rem;
`;

const Dashboard = ({ accessToken }) => {
  const [topArtistsMini, setTopArtistsMini] = useState([]);

  //#region api calls
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getMyTopArtists({ limit: 3 })
      .then(({ body: { items } }) => {
        setTopArtistsMini(items);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }, [accessToken]);
  //#endregion

  return (
    <>
      <section>
        <h2>Your Top 3 artists:</h2>

        {topArtistsMini.map((data, index) => (
          <MiniArtist
            data={data}
            position={index % 2 === 0 ? "left" : "right"}
            index={index}
            key={data.name}
          />
        ))}

        <a href='/top-artists'>
          <LinkBtn>Check out more</LinkBtn>
        </a>
      </section>
    </>
  );
};

export default Dashboard;
