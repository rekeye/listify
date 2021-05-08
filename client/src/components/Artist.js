import React from "react";
import styled from "styled-components";

//#region styled components
const Container = styled.div`
  display: flex;
  flex-direction: ${({ position }) =>
    position === "left" ? "row" : "row-reverse"};
  flex-wrap: wrap;
`;
//#endregion

const Artist = ({
  data: { images, name, follows, genres, href },
  position,
}) => {
  return (
    <Container position={position}>
      <img src={images[1].url} alt={`image of ${name}`}></img>
      <div>
        <h2>{name}</h2>
      </div>
    </Container>
  );
};

export default Artist;
