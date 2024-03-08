import { RouteDecorAttribute } from "./type";
export declare class RouteResponse {
    data: {
        [httpStatus: string]: any;
    };
    decorators?: Record<string, Record<string, RouteDecorAttribute>>;
    private defaultPrefix;
    constructor(data?: Object, decorators?: Record<string, Record<string, RouteDecorAttribute>> | Record<string, RouteDecorAttribute>);
    isWrapperRepsonse(response: Object): boolean;
}
