const express = require("express");
const app = express();
const db = require("./db");
const routes = require("./routes");


const { User } = require('./models')

//Logging middleware
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));

//Bodyparsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Static middleware
app.use(express.static(path.join(__dirname, "/public")));

// Auth
app.use(cookieParser());
app.use(session({ secret: "bootcamp" }));
// Passport
app.use(passport.initialize());
app.use(passport.session());
// Local Strategy


//Router middleware
app.use("/api", routes);

//Index rendering middleware
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Error handler endware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

//Server & data base setting
db.sync({ force: false })
  .then(() =>
    app.listen(1905, () => {
      console.log("Server listening on port 1905");
    })
  )
  .catch((err) => console.log(err));
