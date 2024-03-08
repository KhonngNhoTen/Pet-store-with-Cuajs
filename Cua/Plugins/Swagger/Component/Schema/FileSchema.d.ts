import { SwaggerSchema } from "../../type";
import { BaseSchema, BaseSchemaOptions } from "./BaseSchema";
export type FileSchemaOptions = {
    isArrayFile: boolean;
} & BaseSchemaOptions;
export declare class FileSchema extends BaseSchema {
    private isArrayFile?;
    constructor(opts: FileSchemaOptions);
    genSwagger(): SwaggerSchema;
}
