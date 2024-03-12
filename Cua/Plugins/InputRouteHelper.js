"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRouteHelper = void 0;
const RouteRequest_1 = require("../Route/RouteRequest");
const RouteResponse_1 = require("../Route/RouteResponse");
const RouteStreamData_1 = require("../Route/RouteStreamData");
class InputRouteHelper {
    createPlugin() {
        return {
            beforeCreateRoute: (input, out, parentSchema) => this.convertInput(input, out, parentSchema),
        };
    }
    convertInput(input, out, parentSchema) {
        const resultPath = this.convertParameter(input, parentSchema);
        out = Object.assign(Object.assign({}, out), resultPath);
        if (input.request && !(out.request instanceof RouteRequest_1.RouteRequest) && !(input.request instanceof RouteStreamData_1.RouteStreamData))
            out.request = new RouteRequest_1.RouteRequest(input.request);
        if (input.response && !(out.response instanceof RouteResponse_1.RouteResponse) && !(input.response instanceof RouteStreamData_1.RouteStreamData))
            out.response = new RouteResponse_1.RouteResponse(input.response);
        if (input.request instanceof RouteStreamData_1.RouteStreamData)
            out.request = input.request;
        if (input.response instanceof RouteStreamData_1.RouteStreamData)
            out.response = input.response;
        return out;
    }
    convertParameter(schema, parentSchema) {
        // Create parameter (query) if input is a Array
        let parameters = Array.isArray(schema.parameters)
            ? { query: schema.parameters.reduce((init, val) => (Object.assign(Object.assign({}, init), { [val]: "" })), {}) }
            : schema.parameters;
        // Create parameter (params - path), if the path contains {abc}.
        // The path'll find params and add to parameter objects
        let method, url;
        if (schema.url && this.isAPI(schema)) {
            [method, url] = schema.url.split(" ");
            url = (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.baseUrl) ? (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.baseUrl) + url : url;
            if (!method || !url)
                throw new Error("Url's format is : '<METHOD> <PATH>'");
            let path = {};
            url = url.replace(/:\w+/g, (param) => {
                param = param.replace(":", "");
                path[param] = "";
                return `{${param}}`;
            });
            parameters = Object.assign(Object.assign({}, parameters), { path });
        }
        return { parameters, url, method };
    }
    isAPI(schema) {
        return !schema.baseUrl;
    }
    getType(value) {
        return {}.toString.call(value).split(" ")[1].slice(0, -1).toLowerCase();
    }
    isWrapperRepsonse(response) {
        const key = Object.keys(response).reduce((init, val) => (init += val), "");
        return /^[0-9]+$/.test(key);
    }
}
exports.InputRouteHelper = InputRouteHelper;
