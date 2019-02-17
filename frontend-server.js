const express = require("express");
const request = require("request");
const app = express();

const port = 80;

app.listen(port, () => {
  console.log(`App listening on localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Frontend server");
});

app.get("/app1", (req, res) => {
  request("http://localhost:3000", function(error, response, body) {
    res.send(body);
  });
});

app.get("/app2", (req, res) => {
  request("http://localhost:3001", function(error, response, body) {
    res.send(body);
  });
});
