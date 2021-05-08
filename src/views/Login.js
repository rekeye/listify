import React from "react";
import styled from "styled-components";
import AnimatedBackground from "../components/AnimatedBackground";

//#region styled components
const Container = styled.div`
  width: 100vw;
  position: fixed;
  overflow: hidden;
`;
const Content = styled.div`
  min-height: 100vh;
  padding: 1.4em;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-bottom: 1em;
  }
`;
const LoginBtn = styled.div`
  border-radius: 1em;
  background: var(--base-dark-green);
  padding: 1em 1.5em;
  font-size: 1.5rem;
`;
//#endregion

//#region auth url definition
const REDIRECT_URL = window.location.href;
const CLIENT_ID = "8bab01cec2de40eab277a77d78b87885";
const scopes =
  "user-read-email user-read-private user-top-read user-follow-read";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=${encodeURIComponent(
  scopes
)}`;
//#endregion

const Login = () => {
  return (
    <Container>
      <AnimatedBackground />
      <Content>
        <h1>Listify</h1>
        <p style={{ textAlign: "center" }}>
          Create spotify playlists based on your listening taste
        </p>
        <a href={AUTH_URL}>
          <LoginBtn>Login with spotify</LoginBtn>
        </a>
      </Content>
    </Container>
  );
};

export default Login;
