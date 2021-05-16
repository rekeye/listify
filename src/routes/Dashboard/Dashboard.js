import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SpotifyWebApi from "spotify-web-api-node";
import { AboutYou, LinkBtn, PlaylistItems } from "./Dashboard.styles";
import MiniArtist from "../../components/MiniArtist/MiniArtist";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";
import AddNewPlaylist from "../../components/AddNewPlaylist/AddNewPlaylist";

const spotifyApi = new SpotifyWebApi({
  clientId: "8bab01cec2de40eab277a77d78b87885",
});

const Dashboard = ({ accessToken }) => {
  const [currUser, setCurrUser] = useState({
    display_name: "",
    images: [{ url: "" }],
  });
  const [playlists, setPlaylists] = useState([]);
  const [topArtistsMini, setTopArtistsMini] = useState([]);

  //#region api calls
  useEffect(() => {
    if (accessToken === null) return;

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
          <img
            src={
              currUser.images.length > 0
                ? currUser.images[0].url
                : "../../images/blank-profile-pic.png"
            }
            alt={currUser.display_name}
          />
          <figcaption>
            <p>{currUser.display_name}</p>
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

Dashboard.propTypes = {
  accessToken: PropTypes.string,
};

Dashboard.defaultProps = {
  accessToken: "",
};

export default Dashboard;
