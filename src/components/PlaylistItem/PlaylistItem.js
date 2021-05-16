import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "./PlaylistItem.styles";

const PlaylistItem = ({
  data: {
    external_urls: { spotify },
    images,
    name,
  },
}) => {
  return (
    <a href={spotify}>
      <Container>
        <img src={images[0].url} alt={name} />
        <figcaption>
          <h3>{name}</h3>
          <Button>
            <p>Play it on Spotify</p>
          </Button>
        </figcaption>
      </Container>
    </a>
  );
};

PlaylistItem.propTypes = {
  data: PropTypes.shape({
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
    images: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
  }),
};

PlaylistItem.defaultProps = {
  data: {
    external_urls: { spotify: "" },
    images: [{ url: "" }],
    name: "",
  },
};

export default PlaylistItem;
