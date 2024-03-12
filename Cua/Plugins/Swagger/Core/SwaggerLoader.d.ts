import { Route } from "../../../Route/Route";
import { RouteDecorAttribute } from "../../../Route/type";
import { BaseSchema } from "../Component/Schema/BaseSchema";
import { IRoutePlugin, RoutePlugin } from "../../../Route/RoutePlugin";
export declare class SwaggerLoader implements IRoutePlugin {
    createPlugin(): RoutePlugin;
    /**
     * Generate swagger options ui and save file
     * @param routes
     * @returns
     */
    loadPath(routes: Route[]): Promise<import("../type").SwaggerExportSchema>;
    private createRequestBody;
    private createResponse;
    private createParameters;
    private createSecurity;
    schemaByDecoration(decorators: RouteDecorAttribute): BaseSchema;
}
