const app = require("./app");


async function main () {
  app.listen(4444, () => {
    console.log("server run at 4444")
  })
}



main();