"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sercurity = void 0;
class Sercurity {
    constructor(options) {
        this.isDefault = false;
        this.name = options === null || options === void 0 ? void 0 : options.name;
        this.description = options === null || options === void 0 ? void 0 : options.description;
        this.in = options === null || options === void 0 ? void 0 : options.in;
        this.scheme = options === null || options === void 0 ? void 0 : options.description;
        this.bearerFormat = options === null || options === void 0 ? void 0 : options.bearerFormat;
        this.type = options === null || options === void 0 ? void 0 : options.type;
    }
    genSwagger() {
        var _a;
        const exportSchema = {
            type: (_a = this.type) !== null && _a !== void 0 ? _a : "http",
        };
        if (this.description)
            exportSchema.description = this.description;
        return exportSchema;
    }
}
exports.Sercurity = Sercurity;
