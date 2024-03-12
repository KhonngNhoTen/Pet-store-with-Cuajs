"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteResponse = void 0;
class RouteResponse {
    constructor(data, decorators) {
        this.data = {};
        this.defaultPrefix = "default";
        const checkData = data !== null && data !== void 0 ? data : decorators;
        if (!this.isWrapperRepsonse(checkData)) {
            if (data)
                this.data = { [this.defaultPrefix]: data };
            if (decorators)
                this.decorators = decorators;
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
