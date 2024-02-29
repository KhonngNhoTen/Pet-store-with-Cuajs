import { BaseRouteDataTransform } from "./BaseRouteDataTransform";
import { RouteDataTransform, RouteParameter, RouteSchema } from "./type";
export declare class Route {
    code: string;
    url?: string;
    baseUrl?: string;
    method: string;
    description: string;
    summary: string;
    tags?: string[];
    middlewares: Promise<void>[];
    handler?: (...params: any) => Promise<void>;
    request?: Object | BaseRouteDataTransform;
    response: Record<string, RouteDataTransform | BaseRouteDataTransform> | BaseRouteDataTransform;
    parameters?: RouteParameter;
    childs: Route[];
    security?: string[] | boolean;
    constructor(schema: RouteSchema, parentSchema?: RouteSchema);
    protected createChilds(schemas: RouteSchema[], currentSchema?: RouteSchema): Route[];
    getParams(routeUrl: string, baseUrl?: string): void;
    static formatUrl2SwaggerPath(url: string, handler?: (param: string) => void): string;
    registry(req: any): void;
    listRoutes(): Route[];
    isAPI(): boolean;
}
