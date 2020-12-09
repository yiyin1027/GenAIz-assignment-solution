const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const config = require("../config");

module.exports = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Logging HTTP request/response messages
  if (config.env === "development") {
    app.use(morgan("dev"));
  } else if (config.env === "production") {
    // Log 4xx response codes as warnings
    app.use(
      morgan("combined", {
        skip(req, res) {
          return res.statusCode < 400 || res.statusCode >= 500;
        },
        stream: {
          write: (message) => {
            console.log(message.trim());
          },
        },
      })
    );

    // Log 5xx response codes as errors
    app.use(
      morgan("combined", {
        skip(req, res) {
          return res.statusCode < 500;
        },
        stream: {
          write: (message) => {
            console.error(message.trim());
          },
        },
      })
    );
  }
};
