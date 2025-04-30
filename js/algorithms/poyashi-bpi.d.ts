import { integer } from "../util/types";
/**
 * Calculates the "Beat Performance Index" of an IIDX score.
 * this is a port of Poyashi's implementation.
 * https://github.com/potakusan/iidx_score_manager/blob/f21ba6b85fcc0bf8b7ca888fa2239a3951a9c9c2/src/components/bpi/index.tsx#L120
 *
 * @param yourEx Your EX score.
 * @param kaidenAverage The kaiden average EX score.
 * @param worldRecord The world record's EX score.
 * @param max The maximum amount of EX achievable on this chart.
 * @param powCoef What power the BPI should be raised to. This is arbitrary, and assigned on a per-song basis. Defaults to 1.175.
 * If powCoef is set to -1, it will be overrode to 1.175.
 *
 * @returns A number between -15 and 100. Unless your score is better than
 * the world record, in which case returns can be above 100.
 *
 * @edgecase Even though any score better than the world record *is* now the world record,
 * it takes around 6 months for the official data on the world record to be updated.
 * Since changing the worldRecord affects all scores on the chart, poyashi's
 * implementation just lets BPI exceed 100 until patched.
 *
 * @edgecase BPI is undefined for the case where the world record is equal to the
 * kaiden average.
 */
export declare function calculate(yourEx: integer, kaidenAverage: integer, worldRecord: integer, max: integer, powCoef: number | null): number;
/**
 * Returns the EX Score necessary to achieve the provided BPI.
 *
 * @param bpi - The BPI you wish to find out how much ex is needed for.
 * @param kaidenAverage The kaiden average EX score.
 * @param worldRecord The world record's EX score.
 * @param powCoef What power the BPI should be raised to. This is arbitrary, and assigned on a per-song basis. Defaults to 1.175.
 * If powCoef is set to -1, it will be overrode to 1.175.
 *
 * @returns A number between 0 and `max`.
 *
 * @edgecase -15BPI is achievable by many possible EXs, since it is the lower bound
 * for any given chart. Passing -15 into the function will return the largest
 * possible exScore that results in -15BPI.
 */
export declare function inverse(bpi: number, kaidenAverage: integer, worldRecord: integer, max: integer, powCoef: number | null): number;
