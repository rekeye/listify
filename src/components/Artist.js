import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

//#region styled components
const Container = styled.article`
  display: flex;
  flex-direction: ${({ position }) =>
    position === "left" ? "row" : "row-reverse"};
  margin-bottom: 2em;
  text-align: ${({ position }) => position};
  overflow: hidden;
`;
const FlexColumn = styled.a`
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  transition: all 0.75s linear;
  ${({ inView }) =>
    inView
      ? css`
          opacity: 1;
          transform: translateX(0);
        `
      : css`
          opacity: 0;
          transform: translateX(
            ${({ position }) => (position === "left" ? "-100%" : "100%")}
          );
        `}
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
    external_urls: { spotify: href },
  },
  position,
  index,
}) => {
  const [inView, setInView] = useState();
  const { viewHeight, viewWidth } = useWindowDimensions();
  const elementRef = useRef(null);
  const initPos = useRef();
  //animate image on load
  useEffect(() => {
    initPos.current = elementRef.current.getBoundingClientRect();
    setInView(initPos.current.y < viewHeight);
  }, [viewHeight]);

  //animate images on scroll
  useScrollPosition(
    ({ currPos }) => {
      if (inView) return;
      setInView(currPos.y < viewHeight);
    },
    [inView],
    elementRef
  );

  const image = viewWidth > 1258 ? images[0] : images[1];

  return (
    <Container position={position} ref={elementRef}>
      <FlexColumn width={image.width} href={href}>
        <Image src={image.url} alt={name} position={position} inView={inView} />
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
