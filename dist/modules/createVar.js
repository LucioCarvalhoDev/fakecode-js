import "../lib/luk.js";
import { lexicon } from "../repo/lexicon.js";
import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";
export const createVar = function (type) {
    const data = { name: undefined, value: undefined };
    const result = ["var"];
    const usedNames = Object.keys(register.global.vars);
    data.name = lexicon
        .names
        .vars
        .exclude(usedNames)
        .pick()[0];
    result.push(data.name);
    result.push("=");
    if (type) {
        data.value = primitiveValue(type);
    }
    else {
        if (Math.chance(0.5)) {
            data.value = primitiveValue();
        }
        else {
            data.value = createOperation();
        }
    }
    result.push(data.value + ";");
    register.insertVar(data);
    return result.join(" ");
};
