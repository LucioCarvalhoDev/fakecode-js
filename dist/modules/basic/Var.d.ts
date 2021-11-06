export declare class Var<t> {
    identifier: string;
    value: t;
    constructor(identifier: string, value: t);
    get type(): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
}
