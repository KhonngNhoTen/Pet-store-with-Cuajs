"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTypeString = exports.ContentType = void 0;
var ContentType;
(function (ContentType) {
    ContentType[ContentType["JSON"] = 0] = "JSON";
    ContentType[ContentType["URL_ENDCODED"] = 1] = "URL_ENDCODED";
    ContentType[ContentType["XML"] = 2] = "XML";
    ContentType[ContentType["MULTIPART"] = 3] = "MULTIPART";
})(ContentType || (exports.ContentType = ContentType = {}));
exports.ContentTypeString = {
    [ContentType.JSON]: "application/json",
    [ContentType.URL_ENDCODED]: "application/x-www-form-urlencoded",
    [ContentType.XML]: "application/xml",
    [ContentType.MULTIPART]: "multipart/form-data",
};
