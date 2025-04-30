/**
 * Calculate MUSECA "Curator Skill" for a score.
 *
 * @param score - The score to calculate the skill rating for.
 * @param chartLevel - The level for this chart. Note that some charts are considered
 * to be level 16s, and you should pass 16 to this function instead.
 */
export declare function calculate(score: number, chartLevel: number): number;
/**
 * Given a curator skill value, return the score necessary to get that skill
 * on a chart of the provided level. Throws if this is not possible.
 *
 * @param skill - The curator skill value to invert.
 * @param chartLevel - The difficulty of chart you'd want to achieve this skill value on.
 */
export declare function inverse(skill: number, chartLevel: number): number;
