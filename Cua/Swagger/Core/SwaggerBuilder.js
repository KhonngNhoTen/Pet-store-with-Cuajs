"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerBuilder = void 0;
const Route_1 = require("../../Route/Route");
class SwaggerBuilder {
    get Options() {
        return this.options;
    }
    get PathFile() {
        return this.pathFile;
    }
    get Securities() {
        return this.securities;
    }
    static get Instance() {
        if (!SwaggerBuilder.instance)
            SwaggerBuilder.instance = new SwaggerBuilder();
        return SwaggerBuilder.instance;
    }
    constructor() {
        this.options = { openapi: "", info: {}, servers: [], paths: {} };
        this.pathFile = "";
        this.options.openapi = "3.0.3";
    }
    addPathFile(path) {
        this.pathFile = path;
        return this;
    }
    addApiInfo(title, description, version) {
        if (!this.options.info)
            this.options.info = {};
        this.options.info.description = description;
        this.options.info.title = title;
        this.options.info.version = version;
        return this;
    }
    addServers(urls) {
        this.options.servers = urls.map((e) => ({
            url: e,
        }));
        return this;
    }
    addTag(tags) {
        this.options.tags = tags;
        return this;
    }
    addSecurity(securityOpts) {
        var _a;
        const key = Object.keys(securityOpts)[0];
        const security = securityOpts[key];
        const isDefault = Object.keys((_a = this === null || this === void 0 ? void 0 : this.securities) !== null && _a !== void 0 ? _a : {}).length === 0;
        this.securities = Object.assign(Object.assign({}, this.securities), { [isDefault ? "default" : key]: security });
        delete security.isDefault;
        if (!this.options.components) {
            this.options.components = { securitySchemes: { [isDefault ? "default" : key]: security } };
        }
        else {
            this.options.components.securitySchemes = Object.assign(Object.assign({}, this.options.components.securitySchemes), { [isDefault ? "default" : key]: security });
        }
        return this;
    }
    addExternalDocs(externalDocs) {
        this.options.externalDocs = externalDocs;
        return this;
    }
    insertPath(url) {
        const path = Route_1.Route.formatUrl2SwaggerPath(url);
        if (!this.options.paths[path])
            this.options.paths[path] = {};
        return this.options.paths[path];
    }
    insertApi(url, method, data) {
        const path = this.insertPath(url);
        path[method] = data;
    }
}
exports.SwaggerBuilder = SwaggerBuilder;
