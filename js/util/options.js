"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeOptionsWithDefaults = MergeOptionsWithDefaults;
/**
 * Merge provided options with a set of defaults.
 * @param userOptions - The user given options.
 * @param defaultOptions - Defaults to set if the user hasn't provided a value for
 * that option.
 *
 * @returns An options object that has no missing keys.
 */
function MergeOptionsWithDefaults(userOptions, defaultOptions) {
    return Object.assign({}, defaultOptions, userOptions);
}
//# sourceMappingURL=options.js.map