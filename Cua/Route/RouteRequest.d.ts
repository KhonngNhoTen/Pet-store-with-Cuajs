import { RouteDecorAttribute } from "./type";
export declare class RouteRequest {
    data: Object;
    decorators?: Record<string, RouteDecorAttribute>;
    constructor(data?: Object, decorators?: Record<string, RouteDecorAttribute>);
}
