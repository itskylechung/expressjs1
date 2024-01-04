const path = require("path");
const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(publicDir));
app.set("view engine", "hbs");
app.set("views", view);
hbs.registerPartials(partialsPath);
app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "kyel chung",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    about: "about ME",
    name: "kyle",
  });
});
app.get("", (req, res) => {
  res.send("<h1>Home Page </h1>");
});
app.get("/help", (req, res) => {
  res.render("help", {
    something: "someting wrong",
    or: "Or something Confuse?",
    name: "kyle",
  });
});
app.get("/weather", (req, res) => {
  res.send("Weather is ...");
});
app.get("/help/*", (req, res) => {
  res.send("help article not found");
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "kyel chung",
    errorMessage: "page not found",
  });
});

app.listen(3000, () => {
  console.log("server is setting up on port 3000");
});
