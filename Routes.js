//Complete Mern stack Developer the Mind Set of the Backend Development
//Masters of the Backend Sooooonnnnnnnnnnnnnnnnnnnn.....

const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js");
const postRoutes = require("./routes/post.js");
const loginRoutes = require("./routes/login.js");

const db = require("./config/db.js");
require("dotenv").config();
/////////////////////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  const { username } = req.body;
});
///////////////////////////////////
//Database connected setup here
db()
  .then((res) => console.log("DataBase successfully Connected"))
  .catch((err) => console.log("error occur while connecting to db ", err));

// Use the user routes here
app.use("/api", userRoutes);
app.use("/api", postRoutes);
// Use login routes
app.use("/api", loginRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { error: err });
});

//Route for the home page
app.get("/", function (req, res) {
  res.send("Welcome to Home page");
});

//error routing here
app.use("/error", function (req, res, next) {
  throw Error("usaman is hebhrejrh");
});

//Route for the about page
app.get("/about", function (req, res) {
  res.render("about", { name: "Soomro" });
});

//Route for the contact page
// app.get("/contact", function (req, res) {
//   res.send("Welcome to Contact page");
// });

// ejs setup is here
app.get("/portfolio", function (req, res) {
  res.render("portfolio");
});

//routes parameters
app.get("/usman/:username", function (req, res) {
  res.send(`Hey Muhammad ${req.params.username} Soomro Software Engineer `);
});

//error handling here
app.use(function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
});

//start the server here
app.listen(1212);
