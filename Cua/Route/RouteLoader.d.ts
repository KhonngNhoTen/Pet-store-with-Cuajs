import { IRouteHandler } from "./IRouteHandler";
import { Route } from "./Route";
import { NormalizationRoute } from "./type";
type RouteLoaderOptions = {
    normalization?: NormalizationRoute;
    routeHandlers?: IRouteHandler[];
};
declare class RouteLoader implements IRouteHandler {
    private normalization;
    private routeHandlers;
    constructor(options: RouteLoaderOptions);
    handler(routes: Route[], router: any): Promise<void>;
    load(routes: Route[], router: any): Promise<void>;
}
export default RouteLoader;
