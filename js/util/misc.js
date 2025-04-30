"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEntries = GetEntries;
exports.GetEntriesAsArray = GetEntriesAsArray;
exports.RepeatNTimes = RepeatNTimes;
function* GetEntries(r) {
    for (const key in r) {
        yield [key, r[key]];
    }
}
function GetEntriesAsArray(r) {
    return [...GetEntries(r)];
}
function RepeatNTimes(value, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(value);
    }
    return arr;
}
//# sourceMappingURL=misc.js.map