import { IRouteGenerator } from "../../Core/IRouteGenerator";
import { ISwaggerComponent } from "../../Core/ISwaggerComponent";
import { SwaggerExample } from "../../type";
export type ExampleOption = {
    summary?: string;
    description?: string;
    value?: any;
};
export declare class Example implements ISwaggerComponent, IRouteGenerator {
    protected summary: string;
    protected description: string;
    protected value: any;
    constructor(options: ExampleOption);
    genSwagger(): SwaggerExample;
    fromRoute(routeExample: Object, description?: string, summary?: string): Example;
}
