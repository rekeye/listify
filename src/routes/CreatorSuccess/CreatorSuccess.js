import React from "react";
import PropTypes from "prop-types";

const CreatorSuccess = () => <></>;

CreatorSuccess.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

CreatorSuccess.defaultProps = {
  topArtists: [],
};

export default CreatorSuccess;
