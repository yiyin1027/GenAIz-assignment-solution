const { StatusCodes: httpStatus } = require("http-status-codes");
const express = require("express");

const config = require("../config");
const setup = require("./setup");
const routes = require("./routes");

const create = () => {
  const app = express();

  // Set up the app with middlewares
  setup(app);

  // Apply routes
  app.use("/", routes);

  // Override express default error handler
  app.use((err, req, res, next) => {
    console.error(err);

    if (res) {
      const errorCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
      res.sendStatus(errorCode);
    }
  });

  return app;
};

const run = (app) => {
  const { port } = config.server;
  app.listen(port, () => console.log(`Server running on port ${port}...`));
};

const app = create();

module.exports = { app, run };
