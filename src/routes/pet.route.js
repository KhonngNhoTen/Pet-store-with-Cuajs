const { Route, StreamData, ContentStream } = require("../../Cua").Router;

module.exports = new Route({
  baseUrl: "/pet",
  description: "All api for manages pets",
  tags: ["Pet"],
  childs: [
    {
      url: "GET /",
      code: "PET.LIST",
      parameters: ["id", "name"],
      handler: async (req, res, next) => {
        console.log(req.query);
        res.json("list of pet");
      },
      response: {
        data: [
          {
            name: "",
            id: 1,
            age: 1,
          },
        ],
      },
    },
    {
      url: "POST /",
      code: "PET.CREATE",
      handler: async (req, res, next) => {
        console.log(req.body);
        res.json("logout");
      },
      request: {
        name: "",
        age: 1,
      },
      response: {
        message: "Ok",
      },
    },
    {
      url: "DELETE /:idPet",
      code: "PET.DELETE",
      handler: async (req, res, next) => {
        console.log(req.params);
        res.json("logout");
      },
      response: {
        message: "Ok",
      },
    },
    {
      url: "POST /:idPet/upload",
      code: "PET.UPLOAD_IMAGE",
      handler: async (req, res, next) => {
        console.log(req.params);
        res.json("pet upload image");
      },
      request: new StreamData().singleFile("file"),
      response: {
        message: "Ok",
      },
    },
    {
      url: "GET /:idPet/download-image",
      code: "PET.DOWNLOAD_IMAGE",
      handler: async (req, res, next) => {
        console.log(req.params);
        res.json("pet download image");
      },
      response: new StreamData().addType(ContentStream.JPEG),
    },
  ],
});
