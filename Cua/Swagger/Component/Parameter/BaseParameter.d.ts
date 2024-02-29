import { ISwaggerComponent } from "../../Core/ISwaggerComponent";
import { SwaggerParameter } from "../../type";
import { Example } from "../Example/Example";
import { MediaData } from "../MediaData/MediaData";
import { BaseSchema } from "../Schema/BaseSchema";
export type BaseParameterOptions = {
    in: "query" | "header" | "path" | "cookie";
    name: string;
    description?: string;
    required?: boolean;
    schema?: BaseSchema;
    examples?: Record<string, Example>;
    content?: MediaData;
};
export declare abstract class BaseParameter implements ISwaggerComponent {
    in: "query" | "header" | "path" | "cookie";
    name: string;
    description: string;
    required?: boolean;
    schema?: BaseSchema;
    examples?: Record<string, Example>;
    content?: MediaData;
    constructor(options?: BaseParameterOptions);
    genSwagger(): SwaggerParameter;
}
