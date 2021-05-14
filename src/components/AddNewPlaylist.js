import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--base-light-blue);
`;

const AddNewPlaylist = () => {
  return (
    <Container>
      <p>Create a playlist with Listify</p>
    </Container>
  );
};

export default AddNewPlaylist;
