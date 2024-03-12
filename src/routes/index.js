const router = require("express").Router();
const { RouteLoader } = require("../../Cua").Router;
const { SwaggerLoader } = require("../../Cua").Swagger;
const path = require("path");
const { SchemaLoader } = require("../../Cua/Plugins/Schemas/SchemaLoader");
require("../config/DocumentationConfig");
async function load() {
  const routeLoader = RouteLoader.config({
    plugins: [new SwaggerLoader(), new SchemaLoader({})],
    path: path.join(__dirname, "./**.route.js"),
  });
  await routeLoader.load(router);

  return router;
}

module.exports = load;
