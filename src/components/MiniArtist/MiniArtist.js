import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as SpotifyLogo } from "../../assets/spotify-logo.svg";
import { Container, FlexDiv, Image, LinkBtn } from "./MiniArtist.styles";

const MiniArtist = ({
  data: {
    images,
    name,
    followers: { total: follows },
    external_urls: { spotify: href },
  },
  index,
}) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    <Container>
      <FlexDiv>
        <Image src={images[2].url} alt={name} />
        <div>
          <h3>{`${index + 1}. ${name}`}</h3>
          <p>Followers: {follows}</p>
        </div>
      </FlexDiv>
      <LinkBtn>
        <SpotifyLogo />
      </LinkBtn>
    </Container>
  </a>
);

MiniArtist.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
  }),
  index: PropTypes.number,
};

MiniArtist.defaultProps = {
  data: {
    images: [{ url: "" }],
    name: "",
    external_urls: { spotify: "" },
  },
  index: 0,
};

export default MiniArtist;
