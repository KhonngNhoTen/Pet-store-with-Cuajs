const { Schema } = require("../../Cua/Plugins/Schemas/Schema");
const Pet = require("../Schema/Pet.schema");

const { RouteLoader, RouteStreamData, ContentStream } = require("../../Cua").Router;

const Okschema = new Schema({ msg: "OK" });
const fakeFunc = async (req, res, next) => {
  console.log(req.body);
  console.log(req.query);
  res.json({ msg: "OK" });
};

RouteLoader.addRoute({
  baseUrl: "/pet",
  description: "All api for manages pets",
  tags: ["Pet"],
  childs: [
    {
      url: "GET /",
      code: "PET.LIST",
      parameters: ["id", "name"],
      handler: fakeFunc,
      response: Pet,
    },
    {
      url: "POST /",
      code: "PET.CREATE",
      handler: fakeFunc,
      request: Pet,
      response: Okschema,
    },
    {
      url: "DELETE /:idPet",
      code: "PET.DELETE",
      handler: fakeFunc,
      response: Okschema,
    },
    {
      url: "POST /:idPet/upload",
      code: "PET.UPLOAD_IMAGE",
      handler: fakeFunc,
      request: new RouteStreamData().singleFile("file"),
      response: Okschema,
    },
    {
      url: "GET /:idPet/download-image",
      code: "PET.DOWNLOAD_IMAGE",
      handler: fakeFunc,
      response: new RouteStreamData().fields({ name: "name s" }).addType(ContentStream.JPEG),
    },
  ],
});
