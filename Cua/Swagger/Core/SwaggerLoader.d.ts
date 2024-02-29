import { IRouteHandler } from "../../Route/IRouteHandler";
import { Route } from "../../Route/Route";
import { SwaggerParameter, SwaggerDataTransform, SwaggerResponses } from "../type";
export declare class SwaggerLoader implements IRouteHandler {
    /**
     * Generate swagger options ui and save file
     * @param routes
     * @returns
     */
    handler(routes: Route[]): Promise<import("../type").SwaggerExportSchema>;
    createRequestBody(route: Route): SwaggerDataTransform | null;
    createResponse(route: Route): SwaggerResponses;
    createParameters(route: Route): SwaggerParameter[] | null;
    createSecurity(security?: string[] | boolean): Array<Record<string, string[]>> | undefined;
    static isWrapperRepsonse(response: Object): boolean;
}
