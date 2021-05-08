import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";

//#region styled components
const Container = styled.article`
  display: flex;
  flex-direction: ${({ position }) =>
    position === "left" ? "row" : "row-reverse"};
  gap: 1em;
  text-align: ${({ position }) => position};
`;
const FlexColumn = styled.a`
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  width: auto;
  font-size: 1.2rem;
  p {
    margin: 0.5em;
  }
`;
const Button = styled.div`
  background: var(--base-dark-green);
  text-align: center;
  padding: 1em 0;
  margin-top: 0.5em;
  p {
    font-size: 1.6rem;
  }
`;
//#endregion

const Artist = ({
  data: {
    images,
    name,
    followers: { total: follows },
    genres,
    href,
  },
  position,
  index,
}) => {
  const { width } = useWindowDimensions();

  const image = width > 1258 ? images[0] : images[1];

  return (
    <Container position={position}>
      <FlexColumn width={image.width} href={href}>
        <img src={image.url} alt={name} />
        <Info>
          <h3>{`${index + 1}. ${name}`}</h3>
          <hr />
          <p>
            {`Genres: ${genres.map(
              (genre) => ` ${genre.charAt(0).toUpperCase() + genre.slice(1)}`
            )}`}
          </p>
          <p>Followers: {follows}</p>
        </Info>
        <Button>
          <p>Spotify profile</p>
        </Button>
      </FlexColumn>
    </Container>
  );
};

export default Artist;
