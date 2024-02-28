const {Route, StreamData} = require("../../Cua/build").Router;


module.exports = new Route({
    baseUrl: "/",
    tags: ["Authentication"],
    childs: [
        {
            url: "POST login",
            code: "LOGIN",
            handler: async (req, res, next) => {
                console.log(req.body);
                res.json("login")
            },
            request: {
                username: "username",
                password: "password"
            },
            response: {
                username: "username",
                token: ""
            }

        },
        {
            url: "POST logout",
            code: "LOGOUT",
            handler: async (req, res, next) => {
                res.json("logout")
            },
            response: {
                message: "Ok"
            }
        }
    ]
})
