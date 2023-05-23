const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("", (req, res) => {
  res.render("home");
});
app.get("/history", (req, res) => {
  res.render("history");
});
app.get("/images", (req, res) => {
  res.render("images");
});
app.get("/documents", (req, res) => {
  res.render("documents");
});
app.get("/home", (req, res) => {
  res.render("videos");
});
app.get("/bibliography", (req, res) => {
  res.render("bibliography");
});
app.get("/ext-links", (req, res) => {
  res.render("ext-links");
});
app.get("/recorded-videos", (req, res) => {
  res.render("recorded-videos");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started and running");
});
