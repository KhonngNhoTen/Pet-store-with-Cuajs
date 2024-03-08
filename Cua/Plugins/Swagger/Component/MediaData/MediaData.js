"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaData = void 0;
const Example_1 = require("../Example/Example");
const BaseSchema_1 = require("../Schema/BaseSchema");
const FileSchema_1 = require("../Schema/FileSchema");
const Schema_1 = require("../Schema/Schema");
const MediaType_1 = require("./MediaType");
class MediaData {
    constructor(options) {
        var _a, _b, _c, _d;
        this.schema = (_a = options === null || options === void 0 ? void 0 : options.schema) !== null && _a !== void 0 ? _a : new Schema_1.Schema();
        this.examples = (_b = options === null || options === void 0 ? void 0 : options.examples) !== null && _b !== void 0 ? _b : {};
        this.description = (_c = options === null || options === void 0 ? void 0 : options.description) !== null && _c !== void 0 ? _c : "";
        this.contentType = (_d = options === null || options === void 0 ? void 0 : options.contentType) !== null && _d !== void 0 ? _d : MediaType_1.ContentTypeString[MediaType_1.ContentType.JSON];
    }
    genSwagger() {
        const examples = Object.keys(this.examples).reduce((init, val) => (Object.assign(Object.assign({}, init), { [val]: this.examples[val].genSwagger() })), {});
        const swaggerOpts = { schema: this.schema.genSwagger() };
        if (Object.keys(this.examples).length > 0)
            swaggerOpts.examples = examples;
        return swaggerOpts;
    }
    fromRoute(data) {
        const schema = new Schema_1.Schema().fromRoute(data);
        const examples = new Example_1.Example({ value: data });
        return new MediaData({ schema, examples: { default: examples } });
    }
    createByFile(streamFile) {
        var _a, _b;
        const options = streamFile.getOptions();
        const isArrayFile = !!options.listFileName;
        const nameFile = (_a = options.listFileName) !== null && _a !== void 0 ? _a : options.singleFileName;
        let streamSchema = new FileSchema_1.FileSchema({ isArrayFile, type: BaseSchema_1.TYPES.FILE });
        if (options.listFileName || options.singleFileName)
            streamSchema = new Schema_1.Schema().fromRoute((_b = options.data) !== null && _b !== void 0 ? _b : {}).addNode(streamSchema, nameFile);
        return new MediaData({
            schema: streamSchema,
            contentType: options.contentType,
            description: options.description,
        });
    }
}
exports.MediaData = MediaData;
