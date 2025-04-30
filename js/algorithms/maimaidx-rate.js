"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
const throw_if_1 = require("../util/throw-if");
const RATING_COEFFICIENTS = new Map([
    [1005000, 224],
    [1004999, 222],
    [1000000, 216],
    [999999, 214],
    [995000, 211],
    [990000, 208],
    [989999, 206],
    [980000, 203],
    [970000, 200],
    [969999, 176],
    [940000, 168],
    [900000, 152],
    [800000, 136],
    [799999, 128],
    [750000, 120],
    [700000, 112],
    [600000, 96],
    [500000, 80],
    [400000, 64],
    [300000, 48],
    [200000, 32],
    [100000, 16],
    [0, 0],
]);
/**
 * Calculate maimai DX Splash+ (and newer) rate for a score.
 *
 * @param score - The score to calculate the rate for.
 * @param internalChartLevel - The internal decimal level of the chart the score was achieved on.
 */
function calculate(score, internalChartLevel) {
    (0, throw_if_1.ThrowIf)(score > 101, "Score cannot be greater than 101%.", { score });
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative.", { score });
    throw_if_1.ThrowIf.negative(internalChartLevel, "Internal chart level cannot be negative.", {
        level: internalChartLevel,
    });
    // Scores above 100.5% are capped at 100.5% by the algorithm.
    const scoreInt = Math.min(Math.round(score * 10000), 1005000);
    const iclInt = Math.round(internalChartLevel * 10);
    for (const [scoreBoundary, coefficient] of RATING_COEFFICIENTS) {
        if (scoreInt >= scoreBoundary) {
            return Math.floor((scoreInt * coefficient * iclInt) / 100000000);
        }
    }
    // should be impossible as score cannot be negative and the lowest boundary is >= 0.
    /* istanbul ignore next */
    throw new Error(`Unresolvable score of ${score}.`);
}
//# sourceMappingURL=maimaidx-rate.js.map