/**
 * Calculates the jubility of a score. Returns 0 for anything less than 700k.
 *
 * @param score - The score value. This is between 0 and 1million.
 * @param musicRate - The Music Rate of their score -- this is a percentage value.
 * This is between 0 and 120, where 100-120 is only achiveable on hard mode.
 * @param level - The level for the chart.
 */
export declare function calculate(score: number, musicRate: number, level: number): number;
/**
 * Given a jubility, return the musicRate necessary to get that jubility.
 * This assumes that the player has a score >= 700k, as otherwise no inversion
 * is possible.
 *
 * @param jubility - The jubility to inversely calculate.
 * @param level - The level for the chart.
 */
export declare function inverse(jubility: number, level: number): number;
