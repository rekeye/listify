import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, FlexDiv, Hamburger, Nav, LinkBtn } from "./Header.styles";

const Header = () => {
  const [nav, setNav] = useState(false);

  const location = useLocation();

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
        {location.pathname !== "/" && (
          <Link to='/'>
            <LinkBtn>Home</LinkBtn>
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
