const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

//console.log(path.join(__dirname))
//console.log(path.join(__dirname,'..'))
//console.log(path.join(__dirname,'../public'))
//path for con fig
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//setup handlebar engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
//setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Vasanth",
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    title: "About Me",
    name: "Vasanth",
  });
});
app.get("/help", function (req, res) {
  res.render("help", {
    helpText: "Follow this Instruction:",
    title: "Help",
    name: "Vasanth",
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found",
    name: "Vasanth",
  });
});
app.get("/weather", async (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide the correct Location",
    });
  }
  try {
    const { latitude, longitude, location } = await geocode(req.query.address);
    const forecastData = await forecast(latitude, longitude);
    res.send({
      forecast: forecastData,
      location,
      address: req.query.address,
    });
  } catch (error) {
    return res.send({ error });
  }
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
    name: "Vasanth",
  });
});

app.listen(port, () => {
  console.log("server is port 3000");
});
