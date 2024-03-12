"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDecorations = void 0;
const getTypeSchema = {
    number: { type: "number" },
    string: { type: "string" },
    boolean: { type: "boolean" },
    array: { type: "array" },
    object: { type: "object" },
    date: { type: "string", format: ["date-time"] },
    binary: { type: "string", format: ["binary"] },
};
function parseDecorations(description) {
    if (!description.type)
        return undefined;
    const decoration = Object.assign({}, getTypeSchema[description.type]);
    if (description.type === "object") {
        Object.keys(description.keys).forEach((e) => {
            const deco = parseDecorations(description.keys[e]);
            if (!decoration.decorators)
                decoration.decorators = {};
            if (deco)
                decoration.decorators[e] = deco;
        });
    }
    else if (description.type === "array") {
        const deco = parseDecorations(description.items[0]);
        if (!decoration.decorators)
            decoration.decorators = {};
        if (deco)
            decoration.decorators.item = deco;
    }
    decoration.enum = getEnum(description);
    decoration.required = required(description);
    return decoration;
}
exports.parseDecorations = parseDecorations;
function required(description) {
    var _a;
    return !!(description.flags && ((_a = description.flags) === null || _a === void 0 ? void 0 : _a.presence) === "required");
}
function getEnum(description) {
    return description.allow;
}
function getMinMax(description) {
    if (!description.rules)
        return;
    const res = {};
    const min = [].find((e) => e.name === "min");
    res[min.name] = min.args[0].limit;
    const max = [].find((e) => e.name === "max");
    res[max.name] = max.args[0].limit;
    return res;
}
