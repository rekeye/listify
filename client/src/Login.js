import React from "react";

const REDIRECT_URL = `http://localhost:3000`;
const CLIENT_ID = "8bab01cec2de40eab277a77d78b87885";
const scopes =
  "user-read-email user-read-private user-top-read user-read-recently-played";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scopes=${encodeURIComponent(
  scopes
)}`;

const Login = () => {
  return (
    <div>
      <a href={AUTH_URL}>Login with spotify</a>
    </div>
  );
};

export default Login;
