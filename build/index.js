"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Array2Object(array, key) {
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item
        };
    }, {});
}
exports.default = Array2Object;
