import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SpotifyWebApi from "spotify-web-api-node";
import MiniArtist from "../components/MiniArtist";
import PlaylistItem from "../components/PlaylistItem";
import AddNewPlaylist from "../components/AddNewPlaylist";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

//#region styled-components
const LinkBtn = styled.div`
  background: var(--base-dark-green);
  padding: 0.5em;
  margin: 0.5em 0;
  text-align: center;
  font-size: 1.4rem;
`;
const PlaylistItems = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr;
  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1268px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const AboutYou = styled.figure`
  height: 8rem;
  display: flex;
  align-items: center;
  border: 4px solid var(--base-light-blue);
  p {
    margin-left: 2em;
    font-size: 1.25rem;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
//#endregion

const Dashboard = ({ accessToken }) => {
  const [currUser, setCurrUser] = useState({
    display_name: "",
    images: [{ url: "" }],
  });
  const [playlists, setPlaylists] = useState([]);
  const [topArtistsMini, setTopArtistsMini] = useState([]);

  const userName = currUser.display_name;
  const userImg = currUser.images[0].url;

  //#region api calls
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);

    //user's top artists
    spotifyApi
      .getMyTopArtists({ limit: 3 })
      .then(({ body: { items } }) => {
        setTopArtistsMini(items);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });

    //all playlists of the user
    spotifyApi
      .getMe()
      .then(({ body }) => {
        setCurrUser(body);
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
    <>
      <section>
        <header>
          <h2>Logged in as:</h2>
        </header>

        <AboutYou>
          <img src={userImg} alt={userName} />
          <figcaption>
            <p>{userName}</p>
          </figcaption>
        </AboutYou>
      </section>

      <section>
        <header>
          <h2>Your Top 3 artists:</h2>
        </header>

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

      <section>
        <header>
          <h2>Your playlists:</h2>
        </header>

        <PlaylistItems>
          {playlists.map((data) => (
            <PlaylistItem data={data} key={data.name} />
          ))}
          <AddNewPlaylist />
        </PlaylistItems>
      </section>
    </>
  );
};

export default Dashboard;
