const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const dataSet = {
  chaitanyaKrishna: {
    password: "Pwd123",
  },
  testuser: {
    password: "Pwd123",
  },
};

app.use(cors(), express.json(), express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/authenticateUser", (req, res) => {
  const req_UserName = req.body.username || "";
  const req_Password = req.body.password || "";

  if (dataSet.hasOwnProperty(req_UserName)) {
    // check for the users password
    if (dataSet[req_UserName].password === req_Password) {
      res.send({ isAuthenticated: true, message: "ok" });
    } else{
      res.send({ isAuthenticated: false, message: "Passwords do not match" });
    }
  } else{
    res.send({ isAuthenticated: false, message: "The username dosent exist" });
  }
});

app.listen(port, () => {
  console.log(`app server is live... on ${port}`);
});
