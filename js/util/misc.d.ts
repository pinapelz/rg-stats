export declare function GetEntries<K extends string, V>(r: Record<K, V>): Generator<[K, V]>;
export declare function GetEntriesAsArray<K extends string, V>(r: Record<K, V>): [K, V][];
export declare function RepeatNTimes<T>(value: T, n: number): Array<T>;
