import { InputRouteDataTransform } from "./type";
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
export declare class RouteStreamData {
    private listFileName?;
    private singleFileName?;
    private description?;
    private data?;
    private contentType;
    listFile(name: string): this;
    singleFile(name: string): this;
    fields(data: InputRouteDataTransform): this;
    addDescription(description: string): this;
    addType(type: string): this;
    getOptions(): {
        listFileName: string | undefined;
        singleFileName: string | undefined;
        description: string | undefined;
        data: InputRouteDataTransform | undefined;
        contentType: string;
    };
}
