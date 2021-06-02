import "../lib/luk.js";
import { lexicon } from "../repo/lexicon.js";
import { register } from "../repo/register.js";
import { primitiveValue } from "./primitiveValue.js";
export const createVar = function () {
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
    data.value = primitiveValue();
    result.push(data.value + ";");
    register.insertVar(data);
    return result.join(" ");
};
