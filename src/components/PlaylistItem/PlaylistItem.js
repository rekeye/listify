import React from "react";
import styled from "styled-components";

const Container = styled.figure`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--base-light-blue);
  text-align: center;
`;
const Button = styled.div`
  background: var(--base-dark-green);
  text-align: center;
  padding: 1em 0;
  margin-top: 0.5em;
  p {
    font-size: 1.2rem;
  }
`;

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

export default PlaylistItem;
