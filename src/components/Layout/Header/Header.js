import React, { useState } from "react";
import getCurrentRelativeURL from "../../../hooks/getCurrentRelativePath";
import { Container, FlexDiv, Hamburger, Nav, LinkBtn } from "./Header.styles";

const Header = () => {
  const [nav, setNav] = useState(false);

  const currRelativeURL = getCurrentRelativeURL();

  return (
    <Container>
      <FlexDiv>
        <a href='/'>
          <h1>Listify</h1>
        </a>
        <Hamburger open={nav} onClick={() => setNav(!nav)}>
          <div />
          <div />
          <div />
        </Hamburger>
      </FlexDiv>

      <Nav open={nav}>
        {currRelativeURL !== "/" && (
          <a href='/'>
            <LinkBtn>Go back to Dashboard</LinkBtn>
          </a>
        )}
        <a href='/' onClick={() => sessionStorage.removeItem("accessToken")}>
          <LinkBtn>Log out</LinkBtn>
        </a>
      </Nav>
    </Container>
  );
};

export default Header;
