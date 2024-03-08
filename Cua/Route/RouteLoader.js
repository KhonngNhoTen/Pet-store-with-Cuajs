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
const glob_1 = require("glob");
const RouteNormalization_1 = __importDefault(require("../RouteNormalization/RouteNormalization"));
const InputRouteHelper_1 = require("../Plugins/InputRouteHelper");
const Route_1 = require("./Route");
const RoutePlugin_1 = require("./RoutePlugin");
class RouteLoader {
    constructor(options) {
        var _a;
        this.normalization = RouteNormalization_1.default;
        this.beforeCreateRouteHooks = [];
        this.afterCreateRouteHooks = [];
        this.registerMiddlewareHooks = [];
        this.path = "";
        this.apis = [];
        this.normalization = (_a = options === null || options === void 0 ? void 0 : options.normalization) !== null && _a !== void 0 ? _a : RouteNormalization_1.default;
        const plugins = (options === null || options === void 0 ? void 0 : options.plugins) ? [...options === null || options === void 0 ? void 0 : options.plugins, new InputRouteHelper_1.InputRouteHelper()] : [new InputRouteHelper_1.InputRouteHelper()];
        this.addHooks(plugins);
        if (options === null || options === void 0 ? void 0 : options.path) {
            this.path = options.path;
        }
        return this;
    }
    static get Instance() {
        if (!RouteLoader.instance)
            RouteLoader.instance = new RouteLoader();
        return RouteLoader.instance;
    }
    static addRoute(input) {
        const instance = RouteLoader.Instance;
        const route = RouteLoader.createRoute(instance, input);
        instance.apis.push(...route.listRoutes());
    }
    static createRoute(loader, input, parentSchema) {
        let routeSchema = Object.assign({}, input);
        delete routeSchema.response;
        delete routeSchema.request;
        delete routeSchema.parameters;
        const childs = [];
        for (let i = 0; i < loader.beforeCreateRouteHooks.length; i++)
            routeSchema = loader.beforeCreateRouteHooks[i](input, routeSchema, parentSchema);
        for (let i = 0; input.childs && i < input.childs.length; i++)
            childs.push(this.createRoute(loader, input.childs[i], input));
        if (childs.length > 0)
            routeSchema.childs = childs;
        return new Route_1.Route(routeSchema, parentSchema);
    }
    static config(options) {
        RouteLoader.instance = new RouteLoader(options);
        return RouteLoader.instance;
    }
    addHooks(plugins) {
        for (let i = 0; i < plugins.length; i++) {
            const plugin = plugins[i];
            const hooks = (0, RoutePlugin_1.isIRoutePlugin)(plugin) ? plugin.createPlugin() : plugin;
            if (hooks.afterCreateRoute)
                this.afterCreateRouteHooks.push(hooks.afterCreateRoute);
            if (hooks.beforeCreateRoute)
                this.beforeCreateRouteHooks.push(hooks.beforeCreateRoute);
            if (hooks.registerMiddleware)
                this.registerMiddlewareHooks.push(hooks.registerMiddleware);
        }
    }
    registerMiddlewares(routes, router) {
        return __awaiter(this, void 0, void 0, function* () {
            const globalMiddlewares = [];
            routes.forEach((route) => {
                route.registry(router, globalMiddlewares);
            });
        });
    }
    load(router) {
        return __awaiter(this, void 0, void 0, function* () {
            glob_1.glob.sync(this.path.replace(/\\/g, "/")).forEach((e) => require(e));
            for (let i = 0; i < this.afterCreateRouteHooks.length; i++)
                yield this.afterCreateRouteHooks[i](this.apis);
            yield this.registerMiddlewares(this.apis, router);
            console.log("Load list of api !!!");
        });
    }
}
exports.default = RouteLoader;
