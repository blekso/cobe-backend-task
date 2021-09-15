const express = require("express");
const mongoose = require("mongoose");
const groceries = require("./routes/groceries");
const app = express();

mongoose
  .connect("mongodb://localhost/grocery-list")
  .then(() => console.log("Connected to MongoDB.."))
  .catch((err) => console.error("Cound not connect to MongoDB..", err));

app.use("/api/groceries", groceries);

//set PORT=5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});