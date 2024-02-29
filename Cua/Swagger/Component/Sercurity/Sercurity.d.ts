import { ISwaggerComponent } from "../../Core/ISwaggerComponent";
import { SwaggerSecurity } from "../../type";
type SercurityOptions = {
    name?: string;
    isDefault: boolean;
    description?: string;
    in?: "query" | "header" | "cookie";
    scheme?: string;
    bearerFormat?: string;
    type?: "http" | "apiKey" | "oauth2";
};
export declare class Sercurity implements ISwaggerComponent {
    private isDefault;
    private name?;
    private description?;
    private in?;
    private scheme?;
    private bearerFormat?;
    private type?;
    constructor(options?: SercurityOptions);
    genSwagger(): SwaggerSecurity;
}
export {};
