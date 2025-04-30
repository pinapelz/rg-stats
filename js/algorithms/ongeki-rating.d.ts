export type OngekiNoteLamp = "LOSS" | "CLEAR" | "FULL COMBO" | "ALL BREAK" | "ALL BREAK+";
/**
 * Calculates the rating for an O.N.G.E.K.I. score.
 * This is accurate up to bright MEMORY Act.3.
 *
 * @param technicalScore - The technical score the user got. This is a value between 0 and 1.01million.
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 */
export declare function calculate(technicalScore: number, internalChartLevel: number): number;
/**
 * Calculates the rating for an O.N.G.E.K.I. score.
 * This is accurate as of Re:Fresh.
 *
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 * @param technicalScore - The technical score the user got. This is a value between 0 and 1.01million.
 * @param noteLamp - The note lamp
 * @param fullBell - Whether the bell lamp is "FULL BELL"
 */
export declare function calculateRefresh(internalChartLevel: number, technicalScore: number, noteLamp: OngekiNoteLamp, fullBell: boolean): number;
/**
 * Calculates the star rating for an O.N.G.E.K.I. score.
 * This is accurate as of Re:Fresh.
 *
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 * @param stars - The number of stars, 0-6 with 6 being "rainbow 5-stars"
 */
export declare function calculatePlatinum(internalChartLevel: number, stars: number): number;
