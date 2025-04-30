"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrowIf = ThrowIf;
/**
 * Formats the errVars argument into a pretty string.
 */
function FormatErrVars(errVars) {
    const vars = [];
    for (const [key, value] of Object.entries(errVars)) {
        if (typeof value === "string") {
            // We have to replace "'s here with \" so that the output
            // doesn't get scrambled for certain maliciously crafted
            // strings.
            vars.push(`${key}="${value.replace(/"/gu, '\\"')}"`);
        }
        else {
            vars.push(`${key}=${value}`);
        }
    }
    return vars.join(", ");
}
/**
 * Throw if the condition is not true.
 *
 * @param condition - If false, throw a prettified error,
 * @param errMsg - The error message to display.
 * @param errVars - Variables to format and print out on failure.
 */
function ThrowIf(condition, errMsg, errVars) {
    if (condition) {
        // Add a full stop incase we forget one.
        if (errMsg[errMsg.length - 1] !== ".") {
            // eslint-disable-next-line no-param-reassign
            errMsg += ".";
        }
        throw new Error(`Invalid input, ${errMsg} ${FormatErrVars(errVars)}.`);
    }
}
ThrowIf.not = (value, errMsg, errVars) => ThrowIf(!value, errMsg, errVars);
ThrowIf.negative = (value, errMsg, errVars) => ThrowIf(value < 0, errMsg, errVars);
ThrowIf.positive = (value, errMsg, errVars) => ThrowIf(value > 0, errMsg, errVars);
ThrowIf.positiveOrZero = (value, errMsg, errVars) => ThrowIf(value >= 0, errMsg, errVars);
ThrowIf.negativeOrZero = (value, errMsg, errVars) => ThrowIf(value <= 0, errMsg, errVars);
ThrowIf.zero = (value, errMsg, errVars) => ThrowIf(value === 0, errMsg, errVars);
//# sourceMappingURL=throw-if.js.map