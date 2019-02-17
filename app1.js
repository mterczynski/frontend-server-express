const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("App 1");
});
