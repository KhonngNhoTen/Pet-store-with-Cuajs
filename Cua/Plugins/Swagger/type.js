"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTag = void 0;
function isTag(object) {
    return object.description !== undefined && object.name !== undefined;
}
exports.isTag = isTag;
