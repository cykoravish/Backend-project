import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //not imp {}
    credentials: true, //not imp {}
  })
);
app.use(express.json({ limit: "16kb" })); //limit not imp
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //{} extended not imp
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
