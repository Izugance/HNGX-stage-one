require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // Controller that returns JSON data of the slack name and
  // if passed, the current day, utc_time, and the response
  // status track query
  // parameters
  let today = new Date();
  let days = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  res.status(200).json({
    slack_name: req.query.slack_name ? req.query.slack_name : "not_passed",
    current_day: days[today.getDay()],
    utc_time: today,
    track: req.query.track ? req.query.track : "not_passed",
    status: 200,
  });
});

app.listen(process.env.PORT);
