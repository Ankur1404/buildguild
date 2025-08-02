import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import router from "./controllers";
import startServer from "./utils/server";

dotenv.config(); 

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", router);

// Error handler
app.use((err: any, _req: any, res: any, _next: any) => {
  const error = {
    message: err.message || "Internal Server Error",
    error: err.error || {},
    status: err.status || 500,
  };

  console.error("Unhandled Error:", err);

  res.status(error.status).json(error);
});

startServer(app);

export default app;
