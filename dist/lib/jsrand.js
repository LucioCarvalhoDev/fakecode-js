'use strict';
function Srand(seed) {
    if (seed != null) {
        this.seed(seed);
    }
    else {
        this.randomize();
    }
}
Srand.prototype = {};
Srand.seed = Srand.prototype.seed = function (seed) {
    if (seed == null) {
        return this._seed;
    }
    this._mz = 123456789;
    return (this._mw = this._seed = seed);
};
Srand.randomize = Srand.prototype.randomize = function () {
    return this.seed(1 + Math.floor(Srand.random() * 0xffffffff));
};
Srand.getState = Srand.prototype.getState = function () {
    return {
        seed: this._seed,
        mz: this._mz,
        mw: this._mw,
    };
};
Srand.setState = Srand.prototype.setState = function (state) {
    if (state == null ||
        typeof state !== 'object' ||
        typeof state.seed !== 'number' ||
        typeof state.mz !== 'number' ||
        typeof state.mw !== 'number') {
        throw new Error('Invalid state.');
    }
    this._seed = state.seed;
    this._mz = state.mz;
    this._mw = state.mw;
};
Srand.random = Srand.prototype.random = function () {
    if (this._seed == null) {
        this.randomize();
    }
    let mz = this._mz;
    let mw = this._mw;
    mz = ((mz & 0xffff) * 36969 + (mz >> 16)) & 0xffffffff;
    mw = ((mw & 0xffff) * 18000 + (mw >> 16)) & 0xffffffff;
    this._mz = mz;
    this._mw = mw;
    const x = (((mz << 16) + mw) & 0xffffffff) / 0x100000000;
    return 0.5 + x;
};
Srand.inRange = Srand.prototype.inRange = function (a, b) {
    return a + this.random() * (b - a);
};
Srand.intInRange = Srand.prototype.intInRange = function (min, max) {
    return min + Math.floor(this.random() * (max - min + 1));
};
Srand.choice = Srand.prototype.choice = function (arr) {
    if (arr.length === 0) {
        throw new Error('Cannot choose random element from empty array.');
    }
    const randomIndex = this.intInRange(0, arr.length - 1);
    return arr[randomIndex];
};
Srand.choices = Srand.prototype.choices = function (arr, k) {
    const sample = new Array(k);
    for (let i = 0; i < k; i++) {
        sample[i] = this.choice(arr);
    }
    return sample;
};
Srand.sample = Srand.prototype.sample = function (arr, k) {
    if (k > arr.length) {
        throw new Error('Sample size cannot exceed population size.');
    }
    if (k === arr.length) {
        return [...arr];
    }
    const maxIndex = arr.length - 1;
    const sample = new Array(k);
    const selected = {};
    for (let i = 0, j; i < k; i++) {
        do {
            j = this.intInRange(0, maxIndex);
        } while (selected[j]);
        sample[i] = arr[j];
        selected[j] = true;
    }
    return sample;
};
Srand.shuffle = Srand.prototype.shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = this.intInRange(0, i - 1);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
Srand._oldSrand = undefined;
Srand.noConflict = function () {
    return Srand;
};
export default Srand;
