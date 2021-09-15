import express from "express";
import mongoose from "mongoose";
import { router as groceriesRouter } from "./routes/groceries";

const app = express();

mongoose
  .connect("mongodb://localhost/grocery-list")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Cound not connect to MongoDB...", err));

app.use("/api/groceries", groceriesRouter);

if (process.env.NODE_ENV === "development") {
  console.log('Running in development mode...')
} else {
  console.log('Running in production mode...')
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
