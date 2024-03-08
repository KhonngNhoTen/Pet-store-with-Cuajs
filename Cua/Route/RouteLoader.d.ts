import { IRoutePlugin, RoutePlugin } from "./RoutePlugin";
import { InputRouteSchema, NormalizationRoute } from "./type";
type RouteLoaderOptions = {
    normalization?: NormalizationRoute;
    plugins?: IRoutePlugin[] | RoutePlugin[];
    path: string;
};
declare class RouteLoader {
    private normalization;
    private beforeCreateRouteHooks;
    private afterCreateRouteHooks;
    private registerMiddlewareHooks;
    private path;
    private apis;
    constructor(options?: RouteLoaderOptions);
    private static instance;
    static get Instance(): RouteLoader;
    static addRoute(input: InputRouteSchema): void;
    private static createRoute;
    static config(options: RouteLoaderOptions): RouteLoader;
    private addHooks;
    private registerMiddlewares;
    load(router: any): Promise<void>;
}
export default RouteLoader;
