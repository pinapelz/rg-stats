"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
exports.inverse = inverse;
const throw_if_1 = require("../util/throw-if");
/**
 * Calculate MUSECA "Curator Skill" for a score.
 *
 * @param score - The score to calculate the skill rating for.
 * @param chartLevel - The level for this chart. Note that some charts are considered
 * to be level 16s, and you should pass 16 to this function instead.
 */
function calculate(score, chartLevel) {
    (0, throw_if_1.ThrowIf)(score > 1000000, "Score cannot be greater than 1 million.", { score });
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative.", { score });
    throw_if_1.ThrowIf.negative(chartLevel, "Chart level cannot be negative.", { chartLevel });
    return Math.floor(chartLevel * (score / 10000));
}
/**
 * Given a curator skill value, return the score necessary to get that skill
 * on a chart of the provided level. Throws if this is not possible.
 *
 * @param skill - The curator skill value to invert.
 * @param chartLevel - The difficulty of chart you'd want to achieve this skill value on.
 */
function inverse(skill, chartLevel) {
    const score = (skill / chartLevel) * 10000;
    (0, throw_if_1.ThrowIf)(score >= 1000000, `A skill level of ${skill} is not possible on a chart with level ${chartLevel}.`, { skill, chartLevel });
    return Math.ceil(score);
}
//# sourceMappingURL=curator-skill.js.map