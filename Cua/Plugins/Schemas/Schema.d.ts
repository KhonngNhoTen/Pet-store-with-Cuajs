import Joi from "joi";
export type TypeSchemaDecoration = "number" | "string" | "boolean" | "array" | "object";
export type SchemaDecorations = {
    type?: TypeSchemaDecoration;
    example?: any;
    description?: string;
    format?: string[];
    required?: boolean;
    enum?: any[];
    decorators?: Record<string, SchemaDecorations>;
};
export declare class Schema {
    validations?: Joi.AnySchema;
    decorations?: SchemaDecorations;
    examples?: Record<string, any>;
    constructor(schema?: Object | Joi.AnySchema, examples?: Object);
    optional(fields: string[] | string): this;
    required(fields: string[] | string): this;
    remove(fields: string[]): this;
    add(field: any): this;
    merge(schema: Schema): this;
    clone(): Schema;
}
