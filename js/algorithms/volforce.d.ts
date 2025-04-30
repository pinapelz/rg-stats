import { integer } from "../util/types";
export type SDVXGrades = "D" | "C" | "B" | "A" | "A+" | "AA" | "AA+" | "AAA" | "AAA+" | "S";
export type SDVXLamps = "FAILED" | "CLEAR" | "EXCESSIVE CLEAR" | "MAXXIVE CLEAR" | "ULTIMATE CHAIN" | "PERFECT ULTIMATE CHAIN";
/**
 * Calculate VOLFORCE as it's defined in SDVX4.
 *
 * @param score - The user's score. Between 0 and 10million.
 * @param level - The level of the chart. Between 0 and 20, but this is not enforced.
 */
export declare function calculateVF4(score: integer, level: integer): number;
/**
 * Given a VF4 value and a chart level, return what score is needed to get that
 * VF4.
 *
 * If the score needed is greater than 10million, this function will throw.
 **
 * @param vf4 - The VF4 to invert.
 * @param level - The level of the chart you're inverting for.
 */
export declare function inverseVF4(vf4: integer, level: integer): number | null;
/**
 * Calculate VOLFORCE as it's defined in SDVX5.
 *
 * @param score - The user's score. Between 0 and 10million.
 * @param level - The level of the chart. Between 0 and 20, but this is not enforced.
 */
export declare function calculateVF5(score: integer, lamp: SDVXLamps, level: integer): number;
/**
 * Given a VF5 value and a chart level, return what score is needed to get that
 * VF5.
 *
 * If the score needed is greater than 10million, this function will throw.
 *
 * @param vf5 - The VF5 to invert.
 * @param lamp - The lamp for this score. This is necessary to know, as lampCoefficient
 * plays a part in VF5.
 * @param level - The level of the chart you're inverting for.
 */
export declare function inverseVF5(vf5: number, lamp: Exclude<SDVXLamps, "PERFECT ULTIMATE CHAIN">, level: integer): number | null;
/**
 * Calculate VOLFORCE as it's defined in SDVX6.
 *
 * @param score - The user's score. Between 0 and 10million.
 * @param level - The level of the chart. Between 0 and 20, but this is not enforced.
 */
export declare function calculateVF6(score: integer, lamp: SDVXLamps, level: integer): number;
/**
 * Given a VF6 value and a chart level, return what score is needed to get that
 * VF5.
 *
 * If the score needed is greater than 10million, this function will throw.
 **
 * @param vf6 - The VF6 to invert.
 * @param lamp - The lamp for this score. This is necessary to know, as lampCoefficient
 * plays a part in VF6. Passing "PERFECT ULTIMATE CHAIN" as a lamp is invalid, as inverting
 * it into a score makes no sense.
 * @param level - The level of the chart you're inverting for.
 */
export declare function inverseVF6(vf6: number, lamp: Exclude<SDVXLamps, "PERFECT ULTIMATE CHAIN">, level: integer): number;
