import React from "react";
import PropTypes from "prop-types";
import { AboutYou, LinkBtn, PlaylistItems } from "./Dashboard.styles";
import MiniArtist from "../../components/MiniArtist/MiniArtist";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";
import AddNewPlaylist from "../../components/AddNewPlaylist/AddNewPlaylist";

const Dashboard = ({
  user: { display_name: userName, images: userImgs },
  playlists,
  topArtistsMini,
}) => (
  <>
    <section>
      <header>
        <h2>Logged in as:</h2>
      </header>

      <AboutYou>
        <img
          src={
            userImgs.length > 0
              ? userImgs[0].url
              : "../../images/blank-profile-pic.png"
          }
          alt={userName}
        />
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

Dashboard.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    userImgs: PropTypes.array,
  }),
  playlists: PropTypes.array,
  topArtistsMini: PropTypes.array,
};

Dashboard.defaultProps = {
  user: {
    userName: "",
    userImgs: [{ url: "" }],
  },
  playlists: [],
  topArtistsMini: [],
};

export default Dashboard;
