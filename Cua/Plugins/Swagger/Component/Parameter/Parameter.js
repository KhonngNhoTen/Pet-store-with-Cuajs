"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
const Schema_1 = require("../Schema/Schema");
const BaseSchema_1 = require("../Schema/BaseSchema");
const BaseParameter_1 = require("./BaseParameter");
const MediaData_1 = require("../MediaData/MediaData");
class Parameter extends BaseParameter_1.BaseParameter {
    fromRoute(data, location, key, required) {
        const opts = {
            in: location,
            name: key !== null && key !== void 0 ? key : "",
            required,
        };
        const type = new Schema_1.Schema().getType(data);
        if (type === BaseSchema_1.TYPES.OBJECT)
            opts.content = new MediaData_1.MediaData().fromRoute(data);
        else
            opts.schema = new Schema_1.Schema().fromRoute(data);
        return new Parameter(opts);
    }
}
exports.Parameter = Parameter;
