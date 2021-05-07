const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

require("dotenv").config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

//login authorization handling
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
    .catch(console.log(400));
});

app.listen(PORT, () => {
  console.log(`server is listening on port - ${PORT}`);
});
