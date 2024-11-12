require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./router/indexRouter");
require("./models/db").connectDatabase();
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");


const logger = require("morgan");
app.use(logger("short"));
const ErrorHandler = require("./utils/ErrorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(cookieParser());

app.use("/api/v1", indexRouter);
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`request url not found: ${req.url}`), 404);
});
app.use(generatedError);

app.listen(8000);
