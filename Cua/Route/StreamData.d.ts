import { DataTransform } from "../Swagger/Component/DataTransform/DataTransform";
import { BaseRouteDataTransform } from "./BaseRouteDataTransform";
import { RouteDataTransform } from "./type";
export declare const ContentStream: {
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
export declare class StreamData extends BaseRouteDataTransform {
    private listFileName?;
    private singleFileName?;
    private description?;
    private data?;
    private contentType;
    listFile(name: string): this;
    singleFile(name: string): this;
    fields(data: RouteDataTransform): this;
    addDescription(description: string): this;
    addType(type: string): this;
    dataTransform(): DataTransform;
}
