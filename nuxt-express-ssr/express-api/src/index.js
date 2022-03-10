const express = require("express");
//const { response } = require("express");
//const axios = require("axios");
const { port, db } = require("./configuration");
const app = express();
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
});
const Post = mongoose.model("Post", postSchema);
const silence = new Post({ name: "Silence" });

function connectDb() {
  mongoose.connect(db, {
    useNewUrlParser: true,
  });

  return mongoose.connection;
}

function startServer() {
  app.listen(port, () => {
    console.log("=== API STARTED ON PORT: " + port + " ===");
    console.log("=== DATABASE: " + db + " ===");

    silence.save(function (err, savedElement) {
      if (err) return console.error(err);
      console.log("savedElement with volume!!!!", savedElement);
    });
  });
}

app.get("/test", function (req, res) {
  res.send("API WORKING!");
});

app.get("/testapidata", (req, res) => {
  res.json({
    testapidata: true,
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
