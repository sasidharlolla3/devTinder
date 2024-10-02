const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("Hello from dashboard!");
  });

app.use("/hello", (req, res) => {
  res.send("Hello from server!");
});

app.use("/test", (req, res) => {
  res.send("Hello from Test");
});

app.listen(3000, () => {
  console.log("server is successfully listening at port 3000...");
});
