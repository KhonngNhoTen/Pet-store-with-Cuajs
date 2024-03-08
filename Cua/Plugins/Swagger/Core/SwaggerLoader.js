"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerLoader = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const DataTransform_1 = require("../Component/DataTransform/DataTransform");
const MediaData_1 = require("../Component/MediaData/MediaData");
const Parameter_1 = require("../Component/Parameter/Parameter");
const SwaggerBuilder_1 = require("./SwaggerBuilder");
const BaseSchema_1 = require("../Component/Schema/BaseSchema");
const RouteStreamData_1 = require("../../../Route/RouteStreamData");
class SwaggerLoader {
    createPlugin() {
        return {
            afterCreateRoute: (routes) => this.loadPath(routes),
        };
    }
    /**
     * Generate swagger options ui and save file
     * @param routes
     * @returns
     */
    loadPath(routes) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            const options = SwaggerBuilder_1.SwaggerBuilder.Instance;
            for (let i = 0; i < routes.length; i++) {
                const route = routes[i];
                if (!route.isAPI())
                    continue;
                const path = {
                    description: (_a = route.description) !== null && _a !== void 0 ? _a : "",
                    summary: (_b = route.summary) !== null && _b !== void 0 ? _b : "",
                    tags: route.tags,
                    operationId: (_c = route.code) !== null && _c !== void 0 ? _c : "",
                    requestBody: (_d = this.createRequestBody(route)) !== null && _d !== void 0 ? _d : undefined,
                    responses: (_e = this.createResponse(route)) !== null && _e !== void 0 ? _e : undefined,
                    parameters: (_f = this.createParameters(route)) !== null && _f !== void 0 ? _f : undefined,
                    security: (_g = this.createSecurity(route.security)) !== null && _g !== void 0 ? _g : undefined,
                };
                options.insertApi((_h = route.url) !== null && _h !== void 0 ? _h : "", (_j = route.method) !== null && _j !== void 0 ? _j : "", path);
            }
            yield promises_1.default.writeFile(SwaggerBuilder_1.SwaggerBuilder.Instance.PathFile, JSON.stringify(options.Options));
            return options.Options;
        });
    }
    createRequestBody(route) {
        if (!route.request)
            return null;
        const request = route.request;
        if (request instanceof RouteStreamData_1.RouteStreamData)
            return new DataTransform_1.DataTransform(new MediaData_1.MediaData().createByFile(request)).genSwagger();
        if (request.decorators) {
        }
        return new DataTransform_1.DataTransform(new MediaData_1.MediaData().fromRoute(request.data)).genSwagger();
    }
    createResponse(route) {
        let resOpts = {};
        if (!route.response)
            return null;
        const response = route.response;
        if (response instanceof RouteStreamData_1.RouteStreamData)
            resOpts.default = new DataTransform_1.DataTransform(new MediaData_1.MediaData().createByFile(response)).genSwagger();
        else {
            const prefixs = Object.keys(response.data);
            for (let i = 0; i < prefixs.length; i++) {
                const prefix = prefixs[i];
                resOpts[prefix] = new DataTransform_1.DataTransform(new MediaData_1.MediaData().fromRoute(response.data[prefix])).genSwagger();
            }
        }
        return resOpts;
    }
    createParameters(route) {
        var _a;
        if (!route.parameters)
            return null;
        const locations = ["path", "cookie", "query", "header"];
        const parameters = [];
        for (let i = 0; i < locations.length; i++) {
            const location = locations[i];
            const locationObject = (_a = route.parameters[location]) !== null && _a !== void 0 ? _a : {};
            const keys = Object.keys(locationObject);
            for (let j = 0; j < keys.length; j++) {
                const params = locationObject[keys[j]];
                parameters.push(new Parameter_1.Parameter().fromRoute(params, location, keys[j], location === "path").genSwagger());
            }
        }
        return parameters;
    }
    createSecurity(security) {
        if (security === undefined)
            return undefined;
        if (new BaseSchema_1.BaseSchema().getType(security) === BaseSchema_1.TYPES.BOOLEAN)
            return [{ ["default"]: [] }];
        return security.map((e) => {
            return { e: [] };
        });
    }
}
exports.SwaggerLoader = SwaggerLoader;
