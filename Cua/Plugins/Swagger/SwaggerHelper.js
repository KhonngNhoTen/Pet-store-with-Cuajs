"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerHelper = void 0;
class SwaggerHelper {
    static formatUrl2SwaggerPath(url, handler = () => { }) {
        url = url.replace(/:\w+/g, (param) => {
            param = param.replace(":", "");
            handler(param);
            return `{${param}}`;
        });
        return url;
    }
}
exports.SwaggerHelper = SwaggerHelper;
