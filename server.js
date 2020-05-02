require("dotenv").config();

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  morgan = require("morgan"),
  AppRoutes = require('./Routes/Routes'),
  mysql = require('mysql'),
  db = require('./config/database')

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => res.status(200).send("SBS Express Server Running v1.1"));

app.use("api/v1",AppRoutes)


app.listen(process.env.PORT || 8081, () =>
  console.log("Server running successfully on Port", process.env.PORT)
);
