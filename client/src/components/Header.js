import React from "react";
import styled from "styled-components";

//#region styled components
const Container = styled.header`
  background: var(--base-light-blue);
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
`;

const LogoutBtn = styled.div`
  border-radius: 1em;
  background: var(--base-dark-green);
  padding: 0.5em 1em;
  margin: 0.85em 0;
  font-size: 1.4rem;
`;
//#endregion

const Header = () => {
  return (
    <Container>
      <a href='/'>
        <h1>Listify</h1>
      </a>
      <a href='/'>
        <LogoutBtn>Log out</LogoutBtn>
      </a>
    </Container>
  );
};

export default Header;
