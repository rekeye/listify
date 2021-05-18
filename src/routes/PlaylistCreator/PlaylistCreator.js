import React from "react";
import PropTypes from "prop-types";
import SelectSongsForm from "../../components/Forms/SelectSongsForm/SelectSongsForm";

const PlaylistCreator = ({ topArtists }) => (
  <>
    <SelectSongsForm artists={topArtists} />
    <section></section>
  </>
);

PlaylistCreator.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

PlaylistCreator.defaultProps = {
  topArtists: [],
};

export default PlaylistCreator;
