import express from "express";
const app = express();
import mongoose from "mongoose";
import { MongoDBURL } from "./config.js";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const port = 5000;

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors({
  origin: 'http://localhost:5173', // Your React app URL
  credentials: true
}));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to the page");
});

// Contact routes
app.use("/api/contacts", contactRoutes);

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });