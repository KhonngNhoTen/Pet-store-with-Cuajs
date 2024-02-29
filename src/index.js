const createApp = require("./app");

async function main() {
  const app = await createApp();
  app.listen(4444, () => {
    console.log("server run at 4444");
  });
}

main();
