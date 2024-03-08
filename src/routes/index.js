const router = require("express").Router();
const { RouteLoader } = require("../../Cua").Router;
const { SwaggerLoader } = require("../../Cua").Swagger;
const path = require("path");
require("../config/DocumentationConfig");
async function load() {
  const routeLoader = RouteLoader.config({
    plugins: [new SwaggerLoader()],
    path: path.join(__dirname, "./**.route.js"),
  });
  await routeLoader.load(router);

  return router;
}

module.exports = load;
