/**
 * An object of variables to print if the predicate fails.
 */
export type ErrVars = Record<string, string | number>;
/**
 * Throw if the condition is not true.
 *
 * @param condition - If false, throw a prettified error,
 * @param errMsg - The error message to display.
 * @param errVars - Variables to format and print out on failure.
 */
export declare function ThrowIf(condition: boolean, errMsg: string, errVars: ErrVars): void;
export declare namespace ThrowIf {
    var not: (value: boolean, errMsg: string, errVars: ErrVars) => void;
    var negative: (value: number, errMsg: string, errVars: ErrVars) => void;
    var positive: (value: number, errMsg: string, errVars: ErrVars) => void;
    var positiveOrZero: (value: number, errMsg: string, errVars: ErrVars) => void;
    var negativeOrZero: (value: number, errMsg: string, errVars: ErrVars) => void;
    var zero: (value: number, errMsg: string, errVars: ErrVars) => void;
}
