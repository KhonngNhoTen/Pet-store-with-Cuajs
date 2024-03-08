"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIRoutePlugin = void 0;
function isIRoutePlugin(object) {
    return object.createPlugin !== undefined;
}
exports.isIRoutePlugin = isIRoutePlugin;
