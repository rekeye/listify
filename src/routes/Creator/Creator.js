import React from "react";
import PropTypes from "prop-types";
import CreateForm from "../../components/CreateForm/CreateForm";

const Creator = ({ accessToken, topArtists }) => (
  <>
    <CreateForm accessToken={accessToken} topArtists={topArtists} />
  </>
);

Creator.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

Creator.defaultProps = {
  topArtists: [],
};

export default Creator;
