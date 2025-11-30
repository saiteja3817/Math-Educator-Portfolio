import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";  // Required to handle __dirname alternative in ES modules
import { connectDB } from "./config/db.js";
import getInTouchRoute from './routes/GetInTouch.route.js';

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const __dirname1 = path.resolve();

// Explicitly specify the path to the .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use('/api', getInTouchRoute);  // Use the route for form submissions

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1,"/frontend/dist")))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname1,"frontend","dist","index.html"))
  })
}


app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:"+PORT);
});
// pYnVpsqLInVeyq04