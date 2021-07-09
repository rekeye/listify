import React from "react";
import PropTypes from "prop-types";

const CreatorSuccess = ({
  location: {
    state: { name },
  },
}) => (
  <>
    <img src='../../images/listify-icon.jpg' />
    {name}
  </>
);

CreatorSuccess.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

CreatorSuccess.defaultProps = {
  topArtists: [],
};

export default CreatorSuccess;
