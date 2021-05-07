import React from "react";
import styled from "styled-components";

//#region styled components
const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  min-height: 100vh;
`;
const LinkBtn = styled.div`
  border-radius: 1em;
  background: var(--base-brand-green);
  padding: 1em 1.5em;
  font-size: 1.5rem;
`;
//#endregion

//#region auth url definition
const REDIRECT_URL = "http://localhost:3000";
const CLIENT_ID = "8bab01cec2de40eab277a77d78b87885";
const scopes =
  "user-read-email user-read-private user-top-read user-read-recently-played";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scopes=${encodeURIComponent(
  scopes
)}`;
//#endregion

const Login = () => {
  return (
    <MainContainer>
      <a href={AUTH_URL}>
        <LinkBtn>Login with spotify</LinkBtn>
      </a>
    </MainContainer>
  );
};

export default Login;
