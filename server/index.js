const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const bodyParser = require('body-parser'); // body-parser isnt needed because our api just use GET Methods
const routes = require("./api");
dotenv.config();

const port = 4000;

const app = express();

if (process.env.NODE_ENV === "development") {
  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));
}

// app.use(bodyParser.json());
app.use("/api/items", routes.items);

app.listen(port, function() {
  console.log("server started on port: " + port);
});

module.exports = app;
