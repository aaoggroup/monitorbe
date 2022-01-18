const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.post("/monitor-get-asset", async (req, res) => {
  const { asset } = req.body;
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "/img.png"));
});

app.listen(4000, "localhost", async () => {
  console.log("Running monitor on port 4000.");
});
