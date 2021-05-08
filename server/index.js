const express = require("express");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");

//env variables
require("dotenv").config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//#region login authorization api
app.post("/login", (req, res) => {
  const code = req.body.code;

  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "8bab01cec2de40eab277a77d78b87885",
    clientSecret: process.env.CLIENT_SECRET,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
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
//#endregion

//#region refresh authorization api
app.post("/refresh", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "8bab01cec2de40eab277a77d78b87885",
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: req.body.refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
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
//#endregion

app.listen(PORT, () => {
  console.log(`server is listening on port - ${PORT}`);
});
