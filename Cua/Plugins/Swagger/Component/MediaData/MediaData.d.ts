import { RouteStreamData } from "../../../../Route/RouteStreamData";
import { IRouteGenerator } from "../../Core/IRouteGenerator";
import { ISwaggerComponent } from "../../Core/ISwaggerComponent";
import { SwaggerMediaDataItem } from "../../type";
import { Example } from "../Example/Example";
import { BaseSchema } from "../Schema/BaseSchema";
export type MediaDataOptions = {
    schema: BaseSchema;
    examples?: Record<string, Example>;
    description?: string;
    contentType?: string;
};
export declare class MediaData implements ISwaggerComponent, IRouteGenerator {
    schema: BaseSchema;
    examples: Record<string, Example>;
    description: string;
    contentType: string;
    constructor(options?: MediaDataOptions);
    genSwagger(): SwaggerMediaDataItem;
    fromRoute(data: any): MediaData;
    createByFile(streamFile: RouteStreamData): MediaData;
}
