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
    /**
     * For request and reponse. Type is allowed:
     * - Schema
     * - Record <string, Schema>
     */
    private beforeCreateRoute;
    private parseRoute;
    private createMiddleware;
    private middleware;
}
export {};
