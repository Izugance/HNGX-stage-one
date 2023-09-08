require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
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
    github_file_url:
      "https://github.com/Izugance/HNGX-stage-one/blob/master/app.js",
    github_repo_url: "https://github.com/Izugance/HNGX-stage-one/",
    status_code: 200,
  });
});

app.listen(process.env.PORT);
