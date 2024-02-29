"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSchema = void 0;
const BaseSchema_1 = require("./BaseSchema");
class FileSchema extends BaseSchema_1.BaseSchema {
    constructor(opts) {
        super(opts);
        this.isArrayFile = opts.isArrayFile;
    }
    genSwagger() {
        return this.isArrayFile
            ? {
                type: "array",
                items: {
                    type: "string",
                    format: "binary",
                },
            }
            : {
                type: "string",
                format: "binary",
            };
    }
}
exports.FileSchema = FileSchema;
