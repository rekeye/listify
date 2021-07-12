import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import CreateForm from "../../components/CreateForm/CreateForm";
import Loader from "../../components/Loader/Loader";

const Creator = ({ accessToken, topArtists }) => {
  const [playlistInfo, setPlaylistInfo] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(loading);
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : playlistInfo ? (
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
          setLoading={setLoading}
        />
      )}
    </React.Fragment>
  );
};

Creator.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

Creator.defaultProps = {
  topArtists: [],
};

export default Creator;
