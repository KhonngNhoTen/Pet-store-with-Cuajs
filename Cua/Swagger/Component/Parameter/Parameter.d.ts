import { RouteDataTransform } from "../../../Route/type";
import { IRouteGenerator } from "../../Core/IRouteGenerator";
import { BaseParameter } from "./BaseParameter";
export declare class Parameter extends BaseParameter implements IRouteGenerator {
    fromRoute(data: RouteDataTransform, location: "query" | "header" | "path" | "cookie", key?: string, required?: boolean): BaseParameter;
}
