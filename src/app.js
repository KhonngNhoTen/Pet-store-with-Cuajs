const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const app = express();

async function createApp() {
  const router = await require("./routes")();

  app.use(cors());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  var options = {
    explorer: true,
  };

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(require("../documentation.json"), options));
  app.use(
    morgan(
      "\x1b[33m [:date[iso]] :method :url - \x1b[38;5;36mUser :remote-addr  :user-agent - \x1b[38;5;75mResponse status=:status :response-time ms"
    )
  );
  app.use("/", router);

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
  // const listRoute = require("express-list-endpoints");
  // console.log(listRoute(app));
  return app;
}

module.exports = createApp;
