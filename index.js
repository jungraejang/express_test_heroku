const express = require("express");
const app = express();
const mathMiddleware = require("./routes/mathMiddleware.js");
const cors = require("cors");
const port = process.env.PORT || 8080;

app.use(cors());

app.use("/math", mathMiddleware);

app.get("/", (req, res) => {
  res.send("JRJ Math Lab. Go to url + /about for documentation");
});

app.get("/about", (req, res) => {
  console.log("about what?");
  res.sendFile(__dirname + "/index.html");
});

app.get("/*", (req, res) => {
  res.send("404 page not found. Check your URL or try another query parameter");
});

app.listen(port, () => {
  console.log("listening to port 8080");
});
