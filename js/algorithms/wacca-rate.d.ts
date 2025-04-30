import { integer } from "../util/types";
/**
 * Calculates WACCAs rate for a score.
 *
 * @param score - The score to calculate the rate for.
 * @param internalChartLevel - The internal decimal level of the chart the score was achieved on.
 */
export declare function calculate(score: integer, internalChartLevel: number): number;
/**
 * Given a WACCA rate and a chart level, return the minimum score necessary to get
 * that rate.
 *
 * @param rate - The rate to inverse
 * @param internalChartLevel - The internal decimal level of the chart the rate was on.
 */
export declare function inverse(rate: number, internalChartLevel: number): 0 | 900000 | 990000 | 980000 | 970000 | 960000 | 950000 | 940000 | 920000 | 850000;
