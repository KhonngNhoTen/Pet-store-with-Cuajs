const { SwaggerBuilder } = require("../../Cua").Swagger;

SwaggerBuilder.Instance.addServers(["http://localhost:4444"])
  .addApiInfo("Patstore api", "This is demo budling apis with Cua end expressjs", "1.0.0")
  .addPathFile("documentation.json")
  .addSecurity({
    default: {
      type: "http",
      scheme: "basic",
    },
  })
  .addTag(["Pet"]);
