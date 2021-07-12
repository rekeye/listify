import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Container, FlexColumn, Image, Info, Button } from "./Artist.styles";

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
      <FlexColumn
        width={image.width}
        href={href}
        target='_blank'
        rel='noopener noreferrer'>
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

Artist.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    followers: PropTypes.shape({
      total: PropTypes.number,
    }),
    genres: PropTypes.arrayOf(PropTypes.string),
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
  }),
  position: PropTypes.string,
  index: PropTypes.number,
};

Artist.defaultProps = {
  data: {
    images: [{ url: "" }],
    name: "",
    followers: {
      total: 0,
    },
    genres: [""],
    external_urls: { spotify: "" },
  },
  position: "",
  index: 0,
};

export default Artist;
