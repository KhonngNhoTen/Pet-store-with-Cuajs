"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(schema, parentSchema) {
        var _a, _b, _c, _d;
        this.code = "";
        this.method = "";
        this.description = "";
        this.summary = "";
        this.middlewares = [];
        this.response = {};
        this.code = schema.code;
        this.middlewares = (_a = schema.middlewares) !== null && _a !== void 0 ? _a : [];
        this.handler = schema.handler;
        this.response = (_b = schema.response) !== null && _b !== void 0 ? _b : {};
        this.request = (_c = schema.request) !== null && _c !== void 0 ? _c : undefined;
        this.baseUrl = schema.baseUrl;
        this.tags = (_d = schema.tags) !== null && _d !== void 0 ? _d : parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.tags;
        this.security = schema.security;
        this.parameters = Array.isArray(schema.parameters)
            ? { query: schema.parameters.reduce((init, val) => (Object.assign(Object.assign({}, init), { [val]: "" })), {}) }
            : schema.parameters;
        if (schema.url && this.isAPI())
            this.getParams(schema.url, parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.baseUrl);
        this.childs = schema.childs ? this.createChilds(schema.childs, schema) : [];
    }
    createChilds(schemas, currentSchema) {
        if (!schemas || schemas.length < 0)
            return [];
        return schemas.map((e) => new Route(e, currentSchema));
    }
    getParams(routeUrl, baseUrl) {
        let [method, url] = routeUrl.split(" ");
        if (!method || !url)
            throw new Error("Url's format is : '<METHOD> <PATH>'");
        let params = {};
        Route.formatUrl2SwaggerPath(url, (param) => (params[param] = ""));
        this.parameters = Object.assign(Object.assign({}, this.parameters), { path: params });
        this.url = baseUrl ? baseUrl + url : url;
        this.method = method.toLocaleLowerCase();
    }
    static formatUrl2SwaggerPath(url, handler = () => { }) {
        url = url.replace(/:\w+/g, (param) => {
            param = param.replace(":", "");
            handler(param);
            return `{${param}}`;
        });
        return url;
    }
    registry(req) {
        if (this.isAPI()) {
            const middlewares = [...this.middlewares, this.handler];
            req[this.method](this.url, middlewares);
        }
    }
    listRoutes() {
        const routes = [];
        if (this.isAPI())
            routes.push(this);
        this.childs.forEach((e) => routes.push(...e.listRoutes()));
        return routes;
    }
    isAPI() {
        return !this.baseUrl;
    }
}
exports.Route = Route;
