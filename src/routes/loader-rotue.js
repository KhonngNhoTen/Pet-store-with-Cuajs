const glob = require("glob");
const path = require("path");
require("../config/DocumentationConfig");

function loadRoute() {
  const myPath = path.join(__dirname, "**.route.js").replace(/\\/g, "/");

  const files = glob.sync(myPath);
  /** @type {import("../../Cua/build/Route/Route")[]} */
  let routes = [];
  for (let i = 0; i < files.length; i++) {
    /** @type {import("../../Cua/build/Route/Route").Route} */
    const route = require(files[i]);
    routes.push(...route.listRoutes());
  }

  return routes;
}

module.exports = loadRoute;
