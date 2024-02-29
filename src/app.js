const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../documentation.json");
const express = require("express");
const app = express();

async function createApp() {
  app.use(cors());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  var options = {
    explorer: true,
  };

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
  app.use(
    morgan(
      "\x1b[33m [:date[iso]] :method :url - \x1b[38;5;36mUser :remote-addr  :user-agent - \x1b[38;5;75mResponse status=:status :response-time ms"
    )
  );
  const loadRoute = require("./routes");
  app.use("/", await loadRoute());

  app.use(async (data, req, res, next) => {
    if (data instanceof Error) {
      const status = data.httpCode || 500;
      data.success = false;
      res.status(status).json(data);
    } else {
      const status = data.httpCode || 200;
      res.status(status).json({ ...data, success: true });
    }
  });

  return app;
}

module.exports = createApp;
