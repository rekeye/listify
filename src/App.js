import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./routes/Login";
import Main from "./Main";
import useAuth from "./hooks/useAuth";
import "./styles/main.css";

const Container = styled.main`
  margin-top: 7rem;
  padding: 2em 5vw;
  @media (min-width: 768px) {
    padding: 2em 15vw;
  }
`;

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  const accessToken = useAuth(code) || localStorage.getItem("accessToken");
  localStorage.setItem("accessToken", accessToken);

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
