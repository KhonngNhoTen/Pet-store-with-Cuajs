"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransform = void 0;
const MediaData_1 = require("../MediaData/MediaData");
const Schema_1 = require("../Schema/Schema");
class DataTransform {
    constructor(mediaData) {
        this.mediaData = mediaData;
    }
    fromRoute(route) {
        return new DataTransform(new MediaData_1.MediaData({
            schema: new Schema_1.Schema().fromRoute(route),
        }));
    }
    genSwagger() {
        return {
            description: this.mediaData.description,
            content: {
                [this.mediaData.contentType]: this.mediaData.genSwagger(),
            },
        };
    }
}
exports.DataTransform = DataTransform;
