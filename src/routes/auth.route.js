const { RouteLoader } = require("../../Cua").Router;

RouteLoader.addRoute({
  baseUrl: "/",
  tags: ["Authentication"],
  childs: [
    {
      url: "POST login",
      code: "LOGIN",
      handler: async (req, res, next) => {
        console.log(req.body);
        res.json("login");
      },
      request: {
        username: "username",
        password: "password",
      },
      response: {
        username: "username",
        token: "",
      },
    },
    {
      url: "POST logout",
      code: "LOGOUT",
      handler: async (req, res, next) => {
        res.json("logout");
      },
      response: {
        message: "Ok",
      },
    },
  ],
});
