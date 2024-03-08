"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteStreamData = exports.ContentStream = void 0;
exports.ContentStream = {
    GIF: "image/gif",
    JPEG: "image/jpeg",
    PNG: "image/png",
    TIFF: "image/tiff",
    AUDIO_MPEG: "audio/mpeg",
    AUDIO_WAV: "audio/x-wav",
    MULTIPART_FORM: "multipart/form-data",
    CSS: "text/css",
    CSV: "text/csv",
    HTML: "text/html",
    JS: "text/javascript",
    TEXT: "text/plain",
    XML: "text/xml",
    VIDEO_MPEG: "video/mpeg",
    MP4: "video/mp4",
    FLV: "video/x-flv",
    WEBM: "video/webm",
};
class RouteStreamData {
    constructor() {
        this.contentType = exports.ContentStream.MULTIPART_FORM;
    }
    listFile(name) {
        this.listFileName = name;
        return this;
    }
    singleFile(name) {
        this.singleFileName = name;
        return this;
    }
    fields(data) {
        this.data = data;
        return this;
    }
    addDescription(description) {
        this.description = description;
        return this;
    }
    addType(type) {
        this.contentType = type;
        return this;
    }
    getOptions() {
        return {
            listFileName: this.listFileName,
            singleFileName: this.singleFileName,
            description: this.description,
            data: this.data,
            contentType: this.contentType,
        };
    }
}
exports.RouteStreamData = RouteStreamData;
