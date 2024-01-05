const path = require("path");
const express = require("express");
const geocode = require("./utils/geocode");
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

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "you must provide a search term",
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    something: "someting wrong",
    or: "Or something Confuse?",
    name: "kyle",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "you must provide address" });
  }
  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
    });
    res.send({
      forecasts: forcastData,
      locaton,
      address: req.query.address,
    });
  });
  console.log(req.query.search);
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
