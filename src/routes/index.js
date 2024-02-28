const loadRoute = require("./loader-rotue");

const router = require("express").Router();
const {RouteLoader} = require("../../Cua/build").Router;
const {SwaggerLoader} = require("../../Cua/build").Swagger;

new RouteLoader({
    routeHandlers: [new SwaggerLoader()] 
}).load(loadRoute(), router);

module.exports = router;
