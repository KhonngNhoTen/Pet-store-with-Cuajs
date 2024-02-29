import { BaseRouteDataTransform } from "./Route/BaseRouteDataTransform";
import { Route } from "./Route/Route";
import RouteLoader from "./Route/RouteLoader";
import { StreamData } from "./Route/StreamData";
import { SwaggerBuilder } from "./Swagger/Core/SwaggerBuilder";
import { SwaggerLoader } from "./Swagger/Core/SwaggerLoader";
export declare const Router: {
    Route: typeof Route;
    StreamData: typeof StreamData;
    RouteLoader: typeof RouteLoader;
    BaseRouteDataTransform: typeof BaseRouteDataTransform;
    ContentStream: {
        GIF: string;
        JPEG: string;
        PNG: string;
        TIFF: string;
        AUDIO_MPEG: string;
        AUDIO_WAV: string;
        MULTIPART_FORM: string;
        CSS: string;
        CSV: string;
        HTML: string;
        JS: string;
        TEXT: string;
        XML: string;
        VIDEO_MPEG: string;
        MP4: string;
        FLV: string;
        WEBM: string;
    };
};
export declare const Swagger: {
    SwaggerBuilder: typeof SwaggerBuilder;
    SwaggerLoader: typeof SwaggerLoader;
};
