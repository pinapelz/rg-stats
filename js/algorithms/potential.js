"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
const throw_if_1 = require("../util/throw-if");
/**
 * Calculate Arcaea potential for a score.
 *
 * @param score - The score to calculate the potential for.
 * @param internalChartLevel - The internal decimal level of the chart the score was achieved on.
 */
function calculate(score, internalChartLevel) {
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative.", { score });
    throw_if_1.ThrowIf.negative(internalChartLevel, "Internal chart level cannot be negative.", {
        level: internalChartLevel,
    });
    const iclInt = Math.round(internalChartLevel * 100);
    let potential = 0;
    if (score >= 10000000) {
        potential = iclInt + 200;
    }
    else if (score >= 9800000) {
        potential = iclInt + 100 + Math.floor((score - 9800000) / 2000);
    }
    else {
        potential = iclInt + Math.floor((score - 9500000) / 3000);
    }
    return Math.max(potential / 100, 0);
}
//# sourceMappingURL=potential.js.map