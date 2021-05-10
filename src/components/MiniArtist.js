import React from "react";
import SpotifyLogo from "../assets/64px-Spotify_logo_without_text.svg";
import styled from "styled-components";

//#region styled components
const Container = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Image = styled.img``;
const Info = styled.div``;
const Button = styled.div``;
//#endregion

const MiniArtist = ({
  data: {
    images,
    name,
    genres,
    external_urls: { spotify: href },
  },
  index,
}) => (
  <Container>
    <Image src={images[2].url} alt={name} />
    <Info>
      <h3>{`${index + 1}. ${name}`}</h3>
      <p>
        {`Genres: ${genres.map(
          (genre) => ` ${genre.charAt(0).toUpperCase() + genre.slice(1)}`
        )}`}
      </p>
    </Info>
    <a href={href}>
      <Button>
        <SpotifyLogo />
      </Button>
    </a>
  </Container>
);

export default MiniArtist;
