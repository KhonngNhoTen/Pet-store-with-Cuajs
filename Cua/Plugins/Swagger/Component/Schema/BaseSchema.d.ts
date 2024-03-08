import { ISwaggerComponent } from "../../Core/ISwaggerComponent";
import { SwaggerSchema } from "../../type";
export type BaseSchemaOptions = {
    type: TYPES;
    nullable?: boolean;
    example?: any;
    description?: string;
    format?: string;
    enum?: string[];
    structures?: SwaggerSchema;
    name?: string;
};
export declare enum TYPES {
    STRING = 0,
    NUMBER = 1,
    OBJECT = 2,
    ARRAY = 3,
    FILE = 4,
    BOOLEAN = 5
}
export declare class BaseSchema implements ISwaggerComponent {
    type?: TYPES;
    nodes: Record<string, BaseSchema>;
    structures: SwaggerSchema;
    nullable?: boolean;
    example?: any;
    description?: string;
    format?: string;
    enum?: string[];
    name: string;
    constructor(options?: BaseSchemaOptions);
    genSwagger(): SwaggerSchema;
    addNode(schema: BaseSchema, key?: string): this;
    getType(value: any): TYPES;
}
