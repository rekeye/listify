import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import CreateForm from "../../components/CreateForm/CreateForm";

const Creator = ({ accessToken, topArtists }) => {
  const [playlistName, setPlaylistName] = useState("");
  return (
    <>
      {playlistName ? (
        <Redirect
          to={{
            pathname: "/create-success",
            state: { name: playlistName },
          }}
        />
      ) : (
        <CreateForm
          accessToken={accessToken}
          topArtists={topArtists}
          setPlaylistName={setPlaylistName}
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
