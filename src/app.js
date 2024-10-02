const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstname: "Sasidhar", lastname: "Lolla" });
});

app.post("/user", (req, res) => {
    res.send("DB saved successfully");
  });

  app.delete("/user", (req, res) => {
    res.send("Deleted successfully");
  });

app.use("/home", (req, res) => {
  res.send("Hello from dashboard!");
});

app.listen(3000, () => {
  console.log("server is successfully listening at port 3000...");
});
