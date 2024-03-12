import { RouteDecorAttribute } from "./type";
export declare class RouteResponse {
    data?: {
        [httpStatus: string]: any;
    };
    decorators?: RouteDecorAttribute;
    private defaultPrefix;
    constructor(data?: Object, decorators?: RouteDecorAttribute | Record<string, RouteDecorAttribute>);
    isWrapperRepsonse(response: Object): boolean;
}
