import { RouteRequest } from "./RouteRequest";
import { RouteResponse } from "./RouteResponse";
import { RouteStreamData } from "./RouteStreamData";
import { InputRouteSchema, RouteParameter, RouteSchema } from "./type";
export declare class Route {
    code?: string;
    url?: string;
    baseUrl?: string;
    method?: string;
    description: string;
    summary: string;
    tags?: string[];
    middlewares: Promise<void>[];
    handler?: (...params: any) => Promise<void>;
    request?: RouteRequest | RouteStreamData;
    response?: RouteResponse | RouteStreamData;
    parameters?: RouteParameter;
    childs?: Route[];
    security?: string[] | boolean;
    constructor(schema: RouteSchema, parentSchema?: InputRouteSchema);
    registry(req: any, globalMiddlewares?: any[]): void;
    listRoutes(): Route[];
    isAPI(): boolean;
}
