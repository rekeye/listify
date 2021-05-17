import React from "react";
import PropTypes from "prop-types";
import { Container } from "./TopArtists.styles";
import Artist from "../../components/Artist/Artist";

const TopArtists = ({ topArtists }) => (
  <Container>
    <header>
      <h2>Your Top 10 Artists: </h2>
    </header>
    {topArtists.map((data, index) => (
      <Artist
        data={data}
        position={index % 2 === 0 ? "left" : "right"}
        index={index}
        key={data.name}
      />
    ))}
  </Container>
);

TopArtists.propTypes = {
  topArtists: PropTypes.array,
};

TopArtists.defaultProps = {
  topArtists: [],
};

export default TopArtists;
