import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  padding: 2em 5vw;
  @media (min-width: 768px) {
    padding: 2em 15vw;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
