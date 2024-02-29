"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamData = exports.ContentStream = void 0;
const DataTransform_1 = require("../Swagger/Component/DataTransform/DataTransform");
const MediaData_1 = require("../Swagger/Component/MediaData/MediaData");
const BaseSchema_1 = require("../Swagger/Component/Schema/BaseSchema");
const FileSchema_1 = require("../Swagger/Component/Schema/FileSchema");
const Schema_1 = require("../Swagger/Component/Schema/Schema");
const BaseRouteDataTransform_1 = require("./BaseRouteDataTransform");
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
class StreamData extends BaseRouteDataTransform_1.BaseRouteDataTransform {
    constructor() {
        super(...arguments);
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
    dataTransform() {
        var _a, _b;
        const isArrayFile = !!this.listFileName;
        const nameFile = (_a = this.listFileName) !== null && _a !== void 0 ? _a : this.singleFileName;
        let streamSchema = new FileSchema_1.FileSchema({ isArrayFile, type: BaseSchema_1.TYPES.FILE });
        if (this.listFileName || this.singleFileName)
            streamSchema = new Schema_1.Schema().fromRoute((_b = this.data) !== null && _b !== void 0 ? _b : {}).addNode(streamSchema, nameFile);
        return new DataTransform_1.DataTransform(new MediaData_1.MediaData({
            schema: streamSchema,
            contentType: this.contentType,
            description: this.description,
        }));
    }
}
exports.StreamData = StreamData;
