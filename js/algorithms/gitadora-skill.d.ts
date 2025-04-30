/**
 * Calculate a GITADORA Skill value.
 *
 * @param scorePercent - The percent this score was worth. Must be between 0 and 100.
 * @param level - The level for this chart.
 */
export declare function calculate(scorePercent: number, level: number): number;
/**
 * Given a GITADORA Skill and a level of a chart, return the percent necessary
 * to achieve that skill value.
 *
 * This throws if the skill value is not possible.
 *
 * @param skill - The skill level to invert.
 * @param level - The level of the chart this skill level should be inverted for.
 */
export declare function inverse(skill: number, level: number): number;
