"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
class Example {
    constructor(options) {
        var _a, _b;
        this.value = options.value;
        this.summary = (_a = options.summary) !== null && _a !== void 0 ? _a : "";
        this.description = (_b = options.description) !== null && _b !== void 0 ? _b : "";
    }
    genSwagger() {
        return {
            value: this.value,
            description: this.description,
            summary: this.summary,
        };
    }
    fromRoute(routeExample, description, summary) {
        return new Example({ value: routeExample, description, summary });
    }
}
exports.Example = Example;
