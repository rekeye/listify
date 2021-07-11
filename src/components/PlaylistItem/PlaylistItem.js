import React from "react";
import PropTypes from "prop-types";
import icon from "../../images/listify-icon.jpg";
import { Container, Button } from "./PlaylistItem.styles";

const PlaylistItem = ({
  data: {
    external_urls: { spotify },
    images,
    name,
  },
}) => {
  return (
    <a href={spotify} target='_blank'>
      <Container>
        <img src={images.length > 0 ? images[0].url : icon} alt={name} />
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
