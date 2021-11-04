export class Var {
    constructor(identifier, value) {
        this.identifier = identifier;
        this.type = typeof value;
        this.value = value;
    }
}
