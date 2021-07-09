import React, { useState } from "react";
import { Link } from "react-router-dom";
import getCurrentRelativeURL from "../../../hooks/getCurrentRelativePath";
import { Container, FlexDiv, Hamburger, Nav, LinkBtn } from "./Header.styles";

const Header = () => {
  const [nav, setNav] = useState(false);

  const currRelativeURL = getCurrentRelativeURL();

  return (
    <Container>
      <FlexDiv>
        <Link to='/'>
          <h1>Listify</h1>
        </Link>
        <Hamburger open={nav} onClick={() => setNav(!nav)}>
          <div />
          <div />
          <div />
        </Hamburger>
      </FlexDiv>

      <Nav open={nav}>
        {currRelativeURL !== "/" && (
          <Link to='/'>
            <LinkBtn>Go back to Dashboard</LinkBtn>
          </Link>
        )}
        <Link to='/' onClick={() => sessionStorage.removeItem("accessToken")}>
          <LinkBtn>Log out</LinkBtn>
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
