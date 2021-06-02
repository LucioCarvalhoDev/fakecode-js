declare global {
    interface Array<T> {
        last(): T;
        getRandom(): T;
        pick(): any[] | T;
        removeById(id: number): T[];
        exclude(terms: T[]): T[]
    }

    interface Math {
        chance(n: number): boolean;
    }
}

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.getRandom = function () {
    return this[Math.trunc(Math.random() * this.length)];
};

Array.prototype.pick = function (times = 1) {
    if (times == 1) return this.getRandom();
    if (times > 1) {
        let list = new Set();

        for (; list.size < times;) {
            let l = list.size;
            list.add(this.getRandom());
        }

        return Array.from(list);
    }
};

Array.prototype.removeById = function (id) {
    this.splice(id, 1);
    return this;
};

Array.prototype.exclude = function (terms) {
    return this.filter((value: any) => {
        return terms.indexOf(value) == -1;
    });
};

Math.chance = function (number) {
    return Math.random() <= number;
};

export class Stack<T> {

    private _items: T[];
    private _size: number;
    private _garbage: Set<T>;

    constructor(config = { size: 3, garbage: false }) {

        this._items = [];
        this._size = config.size;
        if (config.garbage) this._garbage = new Set();
    }

    pile(value: T) {
        this._items.splice(0, 0, value);

        if (this._items.length > this._size) {
            this.remove();
        }

        if (this._garbage) {
            this._garbage.add(value);
        }
    }

    remove() {
        this._items.pop();
    }

    fullWith(value: T) {
        this._items = [];
        while (this._items.length < this._size) {
            this.pile(value);
        }
    }

    get items() {
        return Array.from(this._items);
    }

    get garbage() {
        return Array.from(this._garbage);
    }

    get size() {
        return this._size;
    }

    get length() {
        return this._items.length;
    }
}