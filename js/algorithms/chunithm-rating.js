"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
const throw_if_1 = require("../util/throw-if");
/**
 * Calculates the rating for a CHUNITHM score.
 * This is accurate up to SUN.
 *
 * @param score - The score the user got. This is a value between 0 and 1.01million.
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 */
function calculate(score, internalChartLevel) {
    const levelBase = internalChartLevel * 100;
    (0, throw_if_1.ThrowIf)(score > 1010000, "Score cannot be greater than 1.01Million.", { score });
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative.", { score });
    throw_if_1.ThrowIf.negative(internalChartLevel, "Chart level cannot be negative.", { internalChartLevel });
    let val = 0;
    if (score >= 1009000) {
        val = levelBase + 215;
    }
    else if (score >= 1007500) {
        val = levelBase + 200 + (score - 1007500) / 100;
    }
    else if (score >= 1005000) {
        val = levelBase + 150 + ((score - 1005000) * 10) / 500;
    }
    else if (score >= 1000000) {
        val = levelBase + 100 + ((score - 1000000) * 5) / 500;
    }
    else if (score >= 975000) {
        val = levelBase + ((score - 975000) * 2) / 500;
    }
    else if (score >= 900000) {
        val = levelBase - 500 + ((score - 900000) * 2) / 300;
    }
    else if (score >= 800000) {
        val = (levelBase - 500) / 2 + ((score - 800000) * ((levelBase - 500) / 2)) / 100000;
    }
    else if (score >= 500000) {
        val = (((levelBase - 500) / 2) * (score - 500000)) / 300000;
    }
    return Math.max(Math.floor(val) / 100, 0);
}
//# sourceMappingURL=chunithm-rating.js.map