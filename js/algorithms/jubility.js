"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
exports.inverse = inverse;
const throw_if_1 = require("../util/throw-if");
/**
 * Calculates the jubility of a score. Returns 0 for anything less than 700k.
 *
 * @param score - The score value. This is between 0 and 1million.
 * @param musicRate - The Music Rate of their score -- this is a percentage value.
 * This is between 0 and 120, where 100-120 is only achiveable on hard mode.
 * @param level - The level for the chart.
 */
function calculate(score, musicRate, level) {
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative.", { score });
    throw_if_1.ThrowIf.negative(level, "Level cannot be negative.", { level });
    throw_if_1.ThrowIf.negative(musicRate, "MusicRate cannot be negative.", { musicRate });
    (0, throw_if_1.ThrowIf)(score > 1000000, "Score cannot be greater than 1million.", { score });
    (0, throw_if_1.ThrowIf)(musicRate > 120, "MusicRate cannot be greater than 120.", { musicRate });
    if (score < 700000) {
        return 0;
    }
    const levelInt = Math.round(level * 10);
    const musicRateInt = Math.floor(musicRate * 10);
    // Note: These constants are arbitrary. I have no idea why they're like this.
    const jub = (levelInt * 125 * musicRateInt) / 99;
    // Jubility is *always* floored to one decimal place.
    return Math.floor(jub / 100) / 10;
}
/**
 * Given a jubility, return the musicRate necessary to get that jubility.
 * This assumes that the player has a score >= 700k, as otherwise no inversion
 * is possible.
 *
 * @param jubility - The jubility to inversely calculate.
 * @param level - The level for the chart.
 */
function inverse(jubility, level) {
    const rate = (99 / (12.5 * level)) * jubility;
    (0, throw_if_1.ThrowIf)(rate > 120, `A jubility of ${jubility} is not possible on a chart with level ${level}.`, { jubility, level });
    return rate;
}
//# sourceMappingURL=jubility.js.map