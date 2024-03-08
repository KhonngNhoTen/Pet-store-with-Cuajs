"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(schema, parentSchema) {
        var _a, _b, _c, _d, _e;
        this.code = "";
        this.method = "";
        this.description = "";
        this.summary = "";
        this.middlewares = [];
        this.code = schema.code;
        this.middlewares = (_b = (_a = schema.middlewares) !== null && _a !== void 0 ? _a : parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.middlewares) !== null && _b !== void 0 ? _b : [];
        this.handler = schema.handler;
        this.baseUrl = schema.baseUrl;
        this.tags = (_c = schema.tags) !== null && _c !== void 0 ? _c : parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.tags;
        this.security = (_e = (_d = schema.security) !== null && _d !== void 0 ? _d : parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.security) !== null && _e !== void 0 ? _e : [];
        this.url = schema.url;
        this.method = schema.method ? schema.method.toLowerCase() : undefined;
        this.parameters = schema.parameters;
        this.response = schema.response;
        this.request = schema.request;
        this.childs = schema.childs;
    }
    registry(req, globalMiddlewares = []) {
        if (this.isAPI()) {
            if (!this.method) {
                console.log("API no method");
                return;
            }
            const middlewares = [...this.middlewares, ...globalMiddlewares, this.handler];
            req[this.method](this.url, middlewares);
        }
    }
    listRoutes() {
        const routes = [];
        if (this.isAPI())
            routes.push(this);
        if (this.childs)
            this.childs.forEach((e) => routes.push(...e.listRoutes()));
        return routes;
    }
    isAPI() {
        return !this.baseUrl;
    }
}
exports.Route = Route;
