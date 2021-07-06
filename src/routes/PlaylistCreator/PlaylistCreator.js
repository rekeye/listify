import React from "react";
import PropTypes from "prop-types";
import CreatePlaylistForm from "../../components/CreatePlaylistForm/CreatePlaylistForm";

const PlaylistCreator = ({ topArtists, client }) => (
  <>
    <CreatePlaylistForm client={client} artists={topArtists} />
  </>
);

PlaylistCreator.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

PlaylistCreator.defaultProps = {
  topArtists: [],
};

export default PlaylistCreator;
