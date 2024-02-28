"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.except = void 0;
function except(array, ..._except) {
    return array.filter(a => !_except.includes(a));
}
exports.except = except;
