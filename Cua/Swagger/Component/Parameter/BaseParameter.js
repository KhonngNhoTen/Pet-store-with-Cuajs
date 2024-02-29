"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseParameter = void 0;
class BaseParameter {
    constructor(options) {
        var _a, _b, _c, _d;
        this.in = (_a = options === null || options === void 0 ? void 0 : options.in) !== null && _a !== void 0 ? _a : "query";
        this.name = (_b = options === null || options === void 0 ? void 0 : options.name) !== null && _b !== void 0 ? _b : "";
        this.description = (_c = options === null || options === void 0 ? void 0 : options.description) !== null && _c !== void 0 ? _c : "";
        this.required = (_d = options === null || options === void 0 ? void 0 : options.required) !== null && _d !== void 0 ? _d : false;
        this.schema = options === null || options === void 0 ? void 0 : options.schema;
        this.examples = options === null || options === void 0 ? void 0 : options.examples;
        this.content = options === null || options === void 0 ? void 0 : options.content;
    }
    genSwagger() {
        const schemaOpts = {
            name: this.name,
            in: this.in,
            description: this.description,
            required: this.required,
        };
        if (this.schema)
            schemaOpts.schema = this.schema.genSwagger();
        if (this.content)
            schemaOpts.content = { [this.content.contentType]: this.content.genSwagger() };
        return schemaOpts;
    }
}
exports.BaseParameter = BaseParameter;
