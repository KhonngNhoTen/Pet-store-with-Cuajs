"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaLoader = void 0;
class SchemaLoader {
    constructor(options) {
        var _a;
        this.validating = (_a = options.validating) !== null && _a !== void 0 ? _a : true;
        this.customError = this.customError;
    }
    createPlugin() {
        return {
            beforeCreateRoute: this.beforeCreateRoute,
            registerMiddleware: this.createMiddleware,
        };
    }
    beforeCreateRoute(input, outSchema) {
        return {
            code: input.code,
        };
    }
    createMiddleware(route) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.middleware;
        });
    }
    middleware(req, res, next, extraData) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.SchemaLoader = SchemaLoader;
