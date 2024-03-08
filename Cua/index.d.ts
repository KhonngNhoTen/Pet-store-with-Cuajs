import { Route } from "./Route/Route";
import RouteLoader from "./Route/RouteLoader";
import { RouteStreamData } from "./Route/RouteStreamData";
import { Schema } from "./Plugins/Schemas/Schema";
import { SchemaLoader } from "./Plugins/Schemas/SchemaLoader";
import { SwaggerBuilder } from "./Plugins/Swagger/Core/SwaggerBuilder";
import { SwaggerLoader } from "./Plugins/Swagger/Core/SwaggerLoader";
export declare const Router: {
    Route: typeof Route;
    RouteStreamData: typeof RouteStreamData;
    RouteLoader: typeof RouteLoader;
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
export declare const Schemas: {
    Schema: typeof Schema;
    SchemaLoader: typeof SchemaLoader;
};
