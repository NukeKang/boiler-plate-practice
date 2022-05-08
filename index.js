//start point
const express = require("express");
const app = express();
const port = 2000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://kang:abcd1234@cluster0.wg0on.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongoDB Connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello FXXKING World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
