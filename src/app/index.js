const express = require("express");
const mongoose = require("mongoose");
const app = express();
const hbs = require("hbs");
const path = require("path");

const templatePath = path.join(__dirname, "./templates")

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
  res.render("home");
})

app.listen("4000", ()=> {
  console.log("Connected")
})
