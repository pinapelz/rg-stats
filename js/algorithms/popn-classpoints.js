"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
exports.inverse = inverse;
const throw_if_1 = require("../util/throw-if");
/**
 * Calculate the pop'n class points for an individual score.
 *
 * @param score - The score value. Between 0 and 100k.
 * @param lamp - The lamp for this score.
 * @param level - The level for this chart. Typically between 1 and 50,
 * but the upper bound is not enforced here.
 */
function calculate(score, lamp, level) {
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative.", { score });
    (0, throw_if_1.ThrowIf)(score > 100000, "Score cannot be better than 100k.", { score });
    throw_if_1.ThrowIf.negative(level, "Chart level cannot be negative.", { level });
    if (score <= 50000) {
        return 0;
    }
    const clearBonus = GetClearBonus(lamp);
    return (10000 * level + score - 50000 + clearBonus) / 5440;
}
function GetClearBonus(lamp) {
    if (lamp === "CLEAR" || lamp === "EASY CLEAR") {
        return 3000;
    }
    else if (lamp === "FULL COMBO" || lamp === "PERFECT") {
        return 5000;
    }
    else if (lamp === "FAILED") {
        return 0;
    }
    throw new Error(`Unknown lamp of ${lamp} passed to pop'n Class Points calculations. Expected any of FAILED, EASY CLEAR, CLEAR, FULL COMBO, PERFECT.`);
}
/**
 * Given a pop'n class points value, expected lamp and chart level, return the
 * score necessary to get that amount of class points.
 *
 * @param classPoints - The class points to invert.
 * @param lamp - The lamp to invert for. The lamp affects how much score is needed
 * to achieve a given class points value.
 * @param level - The level for the chart. Typically between 1 and 50,
 * but the upper bound is not enforced here.
 */
function inverse(classPoints, lamp, level) {
    throw_if_1.ThrowIf.negative(level, "Chart level cannot be negative.", { level });
    if (classPoints === 0) {
        return 0;
    }
    const clearBonus = GetClearBonus(lamp);
    const expectedScore = 5440 * classPoints - 10000 * level + 50000 - clearBonus;
    (0, throw_if_1.ThrowIf)(expectedScore > 100000, `${classPoints} class points is not achievable on a chart with level ${level} and lamp ${lamp}.`, { classPoints, level, lamp });
    return Math.round(expectedScore);
}
//# sourceMappingURL=popn-classpoints.js.map