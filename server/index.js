const express = require("express");
const cors = require("cors");
const path = require("path");
const SpotifyWebApi = require("spotify-web-api-node");
//env variables
require("dotenv").config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 3001;

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

const whitelist = [
  `http://localhost:${PORT}/`,
  `https://spotify-listify.herokuapp.com:${PORT}`,
];
const corsOptions = {
  origin: (origin, callback) => {
    whitelist.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error("Not allowed by CORS"));
  },
};
app.use(cors(corsOptions));
app.use(express.json());

//#region login authorization api
app.post("/login", (req, res) => {
  const code = req.body.code;

  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) =>
      res.json({
        accessToken: data.body["access_token"],
        refreshToken: data.body["refresh_token"],
        expiresIn: data.body["expires_in"],
      })
    )
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});
//#endregion

//#region refresh authorization api
app.post("/refresh", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: req.body.refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) =>
      res.json({
        accessToken: data.body["access_token"],
        expiresIn: data.body["expires_in"],
      })
    )
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});
//#endregion

//#region create playlist api
const base64 = require("../src/images/listify-icon-base64.json").file.data; //base64 img playlist icon for create playlist api

app.post("/create-playlist-api", cors(), async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    accessToken: req.body.accessToken,
  });

  const playlist = await spotifyApi
    .createPlaylist(req.body.name, { description: req.body.desc })
    .then(({ body }) => body)
    .catch((err) => console.log("Something went wrong!", err));

  spotifyApi
    .getRecommendations({
      seed_artists: req.body.artists,
      limit: 50,
    })
    .then(({ body: { tracks } }) => {
      const trackUris = tracks.map((track) => track.uri);
      return spotifyApi.addTracksToPlaylist(playlist.id, trackUris);
    })
    .then(() => spotifyApi.uploadCustomPlaylistCoverImage(playlist.id, base64))
    .then(() => res.json({ info: playlist, status: "Playlist created!" }))
    .catch((err) => {
      console.log("Something went wrong!", err);
      res.sendStatus(400);
    });
});
//#endregion

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is listening on port - ${PORT}`);
});
