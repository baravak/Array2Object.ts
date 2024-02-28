"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array2Object = void 0;
function Array2Object(array, key, value) {
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: value === undefined ? item : item.value
        };
    }, {});
}
exports.Array2Object = Array2Object;
