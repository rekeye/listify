import React from "react";
import useAuth from "./hooks/useAuth";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer";
import Login from "./routes/Login/Login";
import Main from "./Main";
import { Container } from "./App.styles";

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  const accessToken = sessionStorage.getItem("accessToken")
    ? useAuth(code)
    : sessionStorage.getItem("accessToken");
  sessionStorage.setItem("accessToken", accessToken);

  return accessToken ? (
    <>
      <ScrollToTop />
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
