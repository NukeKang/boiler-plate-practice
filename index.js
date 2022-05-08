//start point
const express = require("express");
const app = express();
const port = 2000;

const mongoose = require("mongoose");
const { User } = require("./models/User");
const config = require("./config/key");

//application/x-www-from-unlencoded
app.use(express.urlencoded({ extended: true }));
//application/json
app.use(express.json());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("mongoDB Connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 어려워요");
});
app.post("/register", (req, res) => {
  // 회원가입에 필요한 정보들을 clinet에서 가져오면
  // 그것들을 db에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ error: false, err });

    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
