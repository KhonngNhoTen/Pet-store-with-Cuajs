const { SwaggerBuilder } = require("../../Cua").Swagger;

SwaggerBuilder.Instance.addServers(["http://localhost:4444"])
  .addTitle("Patstore api")
  .addDescription("This description")
  .addVersion("1.0.0")
  .addPathFile("documentation.json")
  .addSecurity({
    default: {
      type: "http",
      scheme: "basic",
    },
  })
  .addTag(["Pet", "Authentication"]);
