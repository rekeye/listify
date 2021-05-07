const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

//api config
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//error handling
app.use((err, req, res, next) => {
  console.error(err);
});

app.listen(PORT, () => {
  console.log(`server is listening on port - ${PORT}`);
});
