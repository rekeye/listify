import React from "react";
import styled from "styled-components";
import getCurrentRelativeURL from "../hooks/getCurrentRelativePath";

//#region styled components
const Container = styled.header`
  background: var(--base-light-blue);
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.nav`
  display: flex;
`;
const LinkBtn = styled.div`
  background: var(--base-dark-green);
  padding: 0.5em 1em;
  margin: 0.85em 0.5em;
  font-size: 1.4rem;
`;
//#endregion

const Header = () => {
  const currRelativeURL = getCurrentRelativeURL();

  return (
    <Container>
      <a href='/'>
        <h1>Listify</h1>
      </a>
      <Nav>
        {currRelativeURL !== "/" && (
          <a href='/'>
            <LinkBtn>Go back to Dashboard</LinkBtn>
          </a>
        )}
        <a href='/' onClick={() => localStorage.removeItem("accessToken")}>
          <LinkBtn>Log out</LinkBtn>
        </a>
      </Nav>
    </Container>
  );
};

export default Header;
