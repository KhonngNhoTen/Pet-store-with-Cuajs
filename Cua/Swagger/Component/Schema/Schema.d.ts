import { RouteDataTransform } from "../../../Route/type";
import { IRouteGenerator } from "../../Core/IRouteGenerator";
import { BaseSchema, BaseSchemaOptions } from "./BaseSchema";
export type SchemaOptions = {} & BaseSchemaOptions;
export declare class Schema extends BaseSchema implements IRouteGenerator {
    constructor(options?: SchemaOptions);
    fromRoute(request: RouteDataTransform, key?: string): BaseSchema;
    private primitiveTypeNode;
    private arrayTypeNode;
    private objectTypeNode;
}
