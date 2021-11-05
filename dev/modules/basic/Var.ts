export class Var<t> {
    public identifier: string
    public value: t

    constructor(identifier: string, value: t) {
        this.identifier = identifier
        this.value = value;
    }

    get type() {
        return typeof this.value
    }
}