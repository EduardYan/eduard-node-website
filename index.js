const path = require("path");
const express = require("express");

const port = process.env.PORT || 3000;
const templatesPath = path.join("public/");

const app = express();

//static files
app.use(express.static("/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(templatesPath + "index.html", {
    root: __dirname,
  });
});

app.get("/about", (req, res) => {
  res.sendFile(templatesPath + "about.html", {
    root: __dirname,
  });
});

app.listen(port);
console.log(`Server in port ${port}`);
