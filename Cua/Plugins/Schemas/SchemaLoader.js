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
const RouteRequest_1 = require("../../Route/RouteRequest");
const RouteResponse_1 = require("../../Route/RouteResponse");
const Schema_1 = require("./Schema");
class SchemaLoader {
    constructor(options) {
        var _a;
        this.validating = (_a = options.validating) !== null && _a !== void 0 ? _a : true;
        this.customError = this.customError;
    }
    createPlugin() {
        return {
            beforeCreateRoute: (input, outSchema) => this.beforeCreateRoute(input, outSchema),
            // registerMiddleware: this.createMiddleware,
        };
    }
    /**
     * For request and reponse. Type is allowed:
     * - Schema
     * - Record <string, Schema>
     */
    beforeCreateRoute(input, outSchema) {
        if (input.request) {
            const request = this.parseRoute(input.request, true);
            if (request && request instanceof RouteRequest_1.RouteRequest)
                outSchema.request = request;
        }
        if (input.response) {
            const response = this.parseRoute(input.response, false);
            if (response && response instanceof RouteResponse_1.RouteResponse)
                outSchema.response = response;
        }
        return outSchema;
    }
    parseRoute(data, isRequest = true) {
        const ClassData = isRequest ? RouteRequest_1.RouteRequest : RouteResponse_1.RouteResponse;
        if (data instanceof Schema_1.Schema && data.decorations)
            return new ClassData(undefined, data.decorations);
        if (typeof data === "object" && !isRequest) {
            const newData = {};
            for (const [key, val] of Object.entries(data))
                if (val instanceof Schema_1.Schema && val.decorations)
                    newData[key] = val.decorations;
            if (Object.keys(newData).length > 0)
                return new ClassData(undefined, newData);
        }
        return;
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
