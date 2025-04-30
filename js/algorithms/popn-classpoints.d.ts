import { integer } from "../util/types";
export type PopnLamps = "FAILED" | "EASY CLEAR" | "CLEAR" | "FULL COMBO" | "PERFECT";
/**
 * Calculate the pop'n class points for an individual score.
 *
 * @param score - The score value. Between 0 and 100k.
 * @param lamp - The lamp for this score.
 * @param level - The level for this chart. Typically between 1 and 50,
 * but the upper bound is not enforced here.
 */
export declare function calculate(score: integer, lamp: PopnLamps, level: integer): number;
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
export declare function inverse(classPoints: number, lamp: PopnLamps, level: integer): number;
