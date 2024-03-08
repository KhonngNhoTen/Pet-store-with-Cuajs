import { IRoutePlugin, RoutePlugin } from "../../Route/RoutePlugin";
type SchemaLoaderOptions = {
    validating: boolean;
    customError?: any;
};
export declare class SchemaLoader implements IRoutePlugin {
    private validating;
    private customError?;
    constructor(options: SchemaLoaderOptions);
    createPlugin(): RoutePlugin;
    private beforeCreateRoute;
    private createMiddleware;
    private middleware;
}
export {};
