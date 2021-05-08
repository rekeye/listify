const express = require("express");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");

//env variables
require("dotenv").config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//spotify api initialization
const spotifyApi = new SpotifyWebApi({
  redirectUri: "http://localhost:3000",
  clientId: "8bab01cec2de40eab277a77d78b87885",
  clientSecret: process.env.CLIENT_SECRET,
});

//login authorization api
app.post("/login", (req, res) => {
  const code = req.body.code;

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      //set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi.setRefreshToken(data.body["refresh_token"]);

      //send response to the client
      res.json({
        accessToken: data.body["access_token"],
        refreshToken: data.body["refresh_token"],
        expiresIn: data.body["expires_in"],
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

//refresh authorization api
app.post("/refresh", (req, res) => {
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log("The access token has been refreshed!");

      //set the new access token on the API object so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);

      //send response to the client
      res.json({
        accessToken: data.body["access_token"],
        expiresIn: data.body["expires_in"],
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(PORT, () => {
  console.log(`server is listening on port - ${PORT}`);
});
