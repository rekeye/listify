const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

//login authorization handling
app.get("/login", (req, res) => {});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

//error handling
app.use((err, req, res, next) => {
  console.error(err);
});

app.listen(PORT, () => {
  console.log(`server is listening on port - ${PORT}`);
});
