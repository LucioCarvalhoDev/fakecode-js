import Srand from "seeded-rand";
Array.prototype.last = function () {
    return this[this.length - 1];
};
Array.prototype.getRandom = function () {
    return this[Math.trunc(Srand.random() * this.length)];
};
Array.prototype.pick = function (times = 1) {
    let list = new Set();
    for (; list.size < times;) {
        let l = list.size;
        list.add(this.getRandom());
    }
    return Array.from(list);
};
Array.prototype.removeById = function (id) {
    this.splice(id, 1);
    return this;
};
Array.prototype.exclude = function (terms) {
    return this.filter((value) => {
        return terms.indexOf(value) == -1;
    });
};
Object.prototype.randomProp = function () {
    var keys = Object.keys(this);
    return this[keys[keys.length * Srand.random() << 0]];
};
Math.chance = function (number) {
    return Srand.random() <= number;
};
Math.between = function (min, max) {
    return Math.trunc(Srand.random() * (max - min) + min);
};
export class Stack {
    constructor(config = { size: 3, garbage: false }) {
        this._items = [];
        this._size = config.size;
        if (config.garbage)
            this._garbage = new Set();
    }
    pile(value) {
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
    fullWith(value) {
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
