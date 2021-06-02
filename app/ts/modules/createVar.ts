import "../lib/luk.js";
import { lexicon } from "../repo/lexicon.js";
import { register } from "../repo/register.js";
import { primitiveValue } from "./primitiveValue.js";

type varDefinition = { name: string, value: any }

export const createVar = function () {

    const data: varDefinition = { name: undefined, value: undefined }

    const result: string[] = ["var"];

    // primeiro termo
    const usedNames = Object.keys(register.global.vars);
    data.name = lexicon
        .names
        .vars
        .exclude(usedNames)
        .pick()[0];
    result.push(data.name);

    // "="
    result.push("=")

    // ultimo termo
    data.value = primitiveValue();
    result.push(data.value + ";")

    register.insertVar(data);
    return result.join(" ")
}

