/**
 * Calculates the rating for a CHUNITHM score.
 * This is accurate up to SUN.
 *
 * @param score - The score the user got. This is a value between 0 and 1.01million.
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 */
export declare function calculate(score: number, internalChartLevel: number): number;
