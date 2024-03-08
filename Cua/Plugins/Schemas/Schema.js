"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
class Schema {
    constructor() {
        this.data = {};
    }
    optional(fields) {
        return this;
    }
    required(fields) {
        return this;
    }
    remove(fields) {
        return this;
    }
    add(field) {
        return this;
    }
    merge(schema) {
        return this;
    }
}
exports.Schema = Schema;
