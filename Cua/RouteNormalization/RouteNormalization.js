"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizationRoute(...params) {
    const [para1, para2, para3, para4] = params;
    let req, res, next, extraData;
    if (para1 && para2 && para3 && !para4)
        [req, res, next] = [para1, para2, para3];
    if (para1 && para2 && !para3 && !para4)
        [req, res] = [para1, para2];
    if (para1 && para2 && para3 && para4)
        [extraData, req, res, next] = [para1, para2, para3, para4];
    return { req, res, next, extraData };
}
exports.default = normalizationRoute;
