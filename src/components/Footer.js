import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 1em 4em;
`;

const Footer = () => {
  return (
    <Container>
      <p>@2021, Szymon Paluch</p>
    </Container>
  );
};

export default Footer;
