import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import CreateForm from "../../components/CreateForm/CreateForm";

const Creator = ({ accessToken, topArtists }) => {
  const [playlistInfo, setPlaylistInfo] = useState("");
  return (
    <>
      {playlistInfo ? (
        <Redirect
          to={{
            pathname: "/create-success",
            state: { playlistInfo: playlistInfo },
          }}
        />
      ) : (
        <CreateForm
          accessToken={accessToken}
          topArtists={topArtists}
          setPlaylistInfo={setPlaylistInfo}
        />
      )}
    </>
  );
};

Creator.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

Creator.defaultProps = {
  topArtists: [],
};

export default Creator;
