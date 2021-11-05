import "../lib/luk.js";
import { int } from "./basic/int.js";
import { str } from "./basic/str.js";

export type primitiveTypes = "falsy" | "boolean" | "number" | "string" | "any";

export const primitiveValue = function (type: primitiveTypes = "any") {

    const types: primitiveTypes[] = ["boolean", "number", "string"];

    if (type === "any") type = types.getRandom();

    let res;

    switch (type) {
        case "boolean":
            res = [true, false].getRandom();
            break;
        case "number":
            res = int(1024);
            break;
        case "falsy":
            res = [null, NaN].getRandom();
            break;
        case "string":
            res = str();
    }

    return res;

};