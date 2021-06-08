import * as dotenv from "dotenv";
import createError from "http-errors";
import express, { Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import alertsRouter from "./routes/alerts";

dotenv.config();
const app = express();

//mongoose setup

import Mongoose from "mongoose";

if (!process.env.MONGO_URL) {
  throw new Error("No MONGO_URL env variable was provided");
}

const url = process.env.MONGO_URL;

const connectToMongoose = async () => {
  try {
    await Mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(e);
  }
};

connectToMongoose();

const db = Mongoose.connection;

db.once("open", (_) => {
  console.log("database connected: ", url);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", alertsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

const errorHandler = (err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
};

// error handler
app.use(errorHandler);

module.exports = app;
