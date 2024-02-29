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
const BaseRouteDataTransform_1 = require("../../Route/BaseRouteDataTransform");
const DataTransform_1 = require("../Component/DataTransform/DataTransform");
const MediaData_1 = require("../Component/MediaData/MediaData");
const Parameter_1 = require("../Component/Parameter/Parameter");
const SwaggerBuilder_1 = require("./SwaggerBuilder");
const BaseSchema_1 = require("../Component/Schema/BaseSchema");
class SwaggerLoader {
    /**
     * Generate swagger options ui and save file
     * @param routes
     * @returns
     */
    handler(routes) {
        var _a, _b, _c, _d, _e, _f;
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
                    operationId: route.code,
                    requestBody: (_c = this.createRequestBody(route)) !== null && _c !== void 0 ? _c : undefined,
                    responses: this.createResponse(route),
                    parameters: (_d = this.createParameters(route)) !== null && _d !== void 0 ? _d : undefined,
                    security: (_e = this.createSecurity(route.security)) !== null && _e !== void 0 ? _e : undefined,
                };
                options.insertApi((_f = route.url) !== null && _f !== void 0 ? _f : "", route.method, path);
            }
            yield promises_1.default.writeFile(SwaggerBuilder_1.SwaggerBuilder.Instance.PathFile, JSON.stringify(options.Options));
            return options.Options;
        });
    }
    createRequestBody(route) {
        if (!route.request)
            return null;
        if (route.request instanceof BaseRouteDataTransform_1.BaseRouteDataTransform)
            return route.request.dataTransform().genSwagger();
        return new DataTransform_1.DataTransform(new MediaData_1.MediaData().fromRoute(route.request)).genSwagger();
    }
    createResponse(route) {
        let resOpts = {};
        if (SwaggerLoader.isWrapperRepsonse(route.response)) {
            const status = Object.keys(route.response);
            for (let i = 0; i < status.length; i++) {
                const response = route.response[status[i]];
                // const media = response instanceof MediaData ? response : new MediaData().fromRoute(response);
                const dataTransform = response instanceof BaseRouteDataTransform_1.BaseRouteDataTransform
                    ? response.dataTransform()
                    : new DataTransform_1.DataTransform(new MediaData_1.MediaData().fromRoute(response));
                resOpts[status[i]] = dataTransform.genSwagger();
            }
        }
        else {
            const dataTransform = route.response instanceof BaseRouteDataTransform_1.BaseRouteDataTransform
                ? route.response.dataTransform()
                : new DataTransform_1.DataTransform(new MediaData_1.MediaData().fromRoute(route.response));
            resOpts.default = dataTransform.genSwagger();
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
        const securities = SwaggerBuilder_1.SwaggerBuilder.Instance.Securities;
        if (new BaseSchema_1.BaseSchema().getType(security) === BaseSchema_1.TYPES.BOOLEAN)
            return [{ ["default"]: [] }];
        return security.map((e) => {
            return { e: [] };
        });
    }
    static isWrapperRepsonse(response) {
        const key = Object.keys(response).reduce((init, val) => (init += val), "");
        return /^[0-9]+$/.test(key);
    }
}
exports.SwaggerLoader = SwaggerLoader;
