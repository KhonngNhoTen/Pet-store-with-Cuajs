"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteRequest = void 0;
class RouteRequest {
    constructor(data, decorators) {
        this.data = {};
        if (data)
            this.data = data;
        this.decorators = decorators;
    }
}
exports.RouteRequest = RouteRequest;
