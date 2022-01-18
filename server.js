const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const imageDownloader = require("node-image-downloader");

const app = express();
app.use(cors());
app.use("/public", express.static(__dirname + "/public"));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.post("/monitor-get-asset", async (req, res) => {
  const { asset } = req.body;
});

app.post("/newimage", async (req, res) => {
  imageDownloader({
    imgs: [
      {
        uri: req.body.asset,
        filename: "img",
      },
    ],
    dest: "./public", //destination folder
  })
    .then((info) => {
      console.log("all done", info);
    })
    .catch((error, response, body) => {
      console.log("something goes bad!");
      console.log(error);
    });

  res.sendFile(path.join(__dirname, "/ad-display.html"));
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "/ad-display.html"));
});

app.listen(process.env.PORT || 4000);
