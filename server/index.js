require("dotenv").config();

const express = require("express");
const path = require("path");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

//login authorization handling
app.get("/login", (req, res) => {
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
