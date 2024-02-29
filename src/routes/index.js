const loadRoute = require("./loader-rotue");

const router = require("express").Router();
const { RouteLoader } = require("../../Cua").Router;
const { SwaggerLoader } = require("../../Cua").Swagger;

async function load() {
  await new RouteLoader({
    routeHandlers: [new SwaggerLoader()],
  }).load(loadRoute(), router);

  return router;
}

module.exports = load;
