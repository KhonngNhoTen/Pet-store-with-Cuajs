"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteResponse = void 0;
class RouteResponse {
    constructor(data, decorators) {
        this.data = {};
        this.defaultPrefix = "default";
        if (!data)
            return;
        if (!this.isWrapperRepsonse(data)) {
            this.data = { [this.defaultPrefix]: data };
            if (decorators)
                this.decorators = { [this.defaultPrefix]: decorators };
            return;
        }
        this.data = data;
        this.decorators = decorators;
    }
    isWrapperRepsonse(response) {
        const key = Object.keys(response).reduce((init, val) => (init += val), "");
        return /^[0-9]+$/.test(key);
    }
}
exports.RouteResponse = RouteResponse;
