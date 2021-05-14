import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./routes/Login";
import Main from "./Main";
import useAuth from "./hooks/useAuth";
import "./styles/main.css";

const Container = styled.main`
  margin-top: 8.5rem;
  padding: 0 5vw;
  @media (min-width: 768px) {
    margin-top: 4.5rem;
    padding: 2em 15vw;
  }
`;

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  const accessToken = useAuth(code) || sessionStorage.getItem("accessToken");
  sessionStorage.setItem("accessToken", accessToken);

  return accessToken ? (
    <>
      <Header />
      <Container>
        <Main accessToken={accessToken} />
      </Container>
      <Footer />
    </>
  ) : (
    <Login />
  ); //if code have been returned from authorization render Dashboard otherwise Login
};

export default App;
