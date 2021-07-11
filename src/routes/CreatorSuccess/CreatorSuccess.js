import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import icon from "../../images/listify-icon.jpg";
import {
  Gradient,
  Container,
  Image,
  Description,
  FlexDiv,
  LinkBtn,
} from "./CreatorSuccess.styles";

const CreatorSuccess = ({
  location: {
    state: {
      playlistInfo: {
        external_urls: { spotify },
        name,
        description,
        images,
      },
    },
  },
}) => {
  return (
    <React.Fragment>
      <Gradient />
      <Container>
        <h2>Great, your playlist has been created!</h2>
        <Image src={images.length > 0 ? images[0].url : icon} />
        <h3>{name}</h3>
        <Description>{description}</Description>
        <FlexDiv>
          <a href={spotify} target='_blank'>
            <LinkBtn>Listen to it on Spotify</LinkBtn>
          </a>
          <Link to='/create'>
            <LinkBtn>Create another one</LinkBtn>
          </Link>
        </FlexDiv>
      </Container>
    </React.Fragment>
  );
};

CreatorSuccess.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      playlistInfo: PropTypes.shape({
        external_urls: PropTypes.object,
        name: PropTypes.string,
        description: PropTypes.string,
        images: PropTypes.array,
      }),
    }),
  }),
};

CreatorSuccess.defaultProps = {
  location: {
    state: {
      playlistInfo: {
        external_urls: { spotify: "" },
        name: "placeholder",
        description:
          "Nostrud minim incididunt veniam sit ipsum dolore. Sint nisi mollit velit cupidatat ullamco qui ea non qui. Tempor incididunt eiusmod aute magna Lorem voluptate ipsum mollit. Magna aliqua cupidatat ullamco anim sit quis fugiat anim ipsum ipsum. Sit ex est consequat consectetur eiusmod. Dolor proident pariatur nisi excepteur culpa magna anim deserunt adipisicing exercitation minim proident. Proident est nulla non in proident duis ex ipsum nostrud aute veniam labore irure pariatur.",
        images: [],
      },
    },
  },
};

export default CreatorSuccess;
