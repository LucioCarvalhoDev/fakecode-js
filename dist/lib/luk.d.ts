declare global {
    interface Array<T> {
        last(): T;
        getRandom(): T;
        pick(): T[];
        removeById(id: number): T[];
        exclude(terms: T[]): T[];
    }
    interface Math {
        chance(n: number): boolean;
        between(min: number, max: number): number;
    }
    interface Object {
        randomProp(): any;
    }
}
export declare class Stack<T> {
    private _items;
    private _size;
    private _garbage;
    constructor(config?: {
        size: number;
        garbage: boolean;
    });
    pile(value: T): void;
    remove(): void;
    fullWith(value: T): void;
    get items(): T[];
    get garbage(): T[];
    get size(): number;
    get length(): number;
}
