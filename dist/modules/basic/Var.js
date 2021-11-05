export class Var {
    constructor(identifier, value) {
        this.identifier = identifier;
        this.value = value;
    }
    get type() {
        return typeof this.value;
    }
}
