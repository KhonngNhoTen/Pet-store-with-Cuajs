import { RouteDataTransform } from "../../../Route/type";
import { IRouteGenerator } from "../../Core/IRouteGenerator";
import { ISwaggerComponent } from "../../Core/ISwaggerComponent";
import { SwaggerDataTransform } from "../../type";
import { MediaData } from "../MediaData/MediaData";
export declare class DataTransform implements ISwaggerComponent, IRouteGenerator {
    private mediaData;
    constructor(mediaData: MediaData);
    fromRoute(route: RouteDataTransform): DataTransform;
    genSwagger(): SwaggerDataTransform;
}
