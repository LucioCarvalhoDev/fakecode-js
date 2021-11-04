export class Var<t> {
    public identifier: string
    public type: string
    public value: t

    constructor(identifier: string, value: t) {
        this.identifier = identifier
        this.type = typeof value;
        this.value = value;
    }
}