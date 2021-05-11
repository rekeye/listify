import React from "react";
import { ReactComponent as SpotifyLogo } from "../assets/spotify-logo.svg";
import styled from "styled-components";

//#region styled components
const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  margin-right: 2em;
  width: 25%;
  @media (min-width: 768px) {
    width: auto;
  }
`;
const LinkBtn = styled.div`
  background: var(--base-dark-green);
  padding: 0.5em;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
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
  <a href={href}>
    <Container>
      <FlexDiv>
        <Image src={images[2].url} alt={name} />
        <h3>{`${index + 1}. ${name}`}</h3>
      </FlexDiv>
      <LinkBtn>
        <SpotifyLogo />
      </LinkBtn>
    </Container>
  </a>
);

export default MiniArtist;
