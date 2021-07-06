import React from "react";
import { Container, Content, LoginBtn } from "./Login.styles";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";

//#region auth url definition
const REDIRECT_URL = window.location.href;
const CLIENT_ID = "8bab01cec2de40eab277a77d78b87885";
const scopes =
  "user-read-email user-read-private user-top-read user-follow-read playlist-modify-public ugc-image-upload";

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
