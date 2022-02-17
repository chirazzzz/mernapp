import express from "express";
import colors from 'colors'
import dotenv from "dotenv";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import router from "./routes/goalRoutes.js";

connectDB()

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
