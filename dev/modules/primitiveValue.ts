import "../lib/luk.js";
import { int } from "./basic/int.js";
import { str } from "./basic/str.js";

export type primitiveTypes = "falsy" | "bool" | "tinyint" | "int" | "bigint" | "str" | "any";

export const primitiveValue = function (type: primitiveTypes = "any") {

    const types: primitiveTypes[] = ["bool", "tinyint", "int", "bigint", "falsy", "str"];

    if (type === "any") type = types.pick()[0];

    let res;

    switch (type) {
        case "bool":
            res = [true, false].pick()[0];
            break;
        case "tinyint":
            res = int(256);
            break;
        case "int":
            res = int(65526);
            break;
        case "bigint":
            res = int(4294967296);
            break;
        case "falsy":
            res = [null, NaN].pick()[0];
            break;
        case "str":
            res = str();
    }

    return res;

};