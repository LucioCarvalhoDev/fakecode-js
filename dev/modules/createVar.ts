import "../lib/luk.js";
import { lexicon } from "../repo/lexicon.js";
import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";

import type { primitiveTypes } from "./primitiveValue.js";
import { Var } from "./basic/Var.js";

type varDefinition = { name: string, value: any }

export const createVar = function (type?: primitiveTypes) {

    const data: varDefinition = { name: undefined, value: undefined }

    const result: string[] = ["var"];

    // primeiro termo
    const usedNames = Object.keys(register.listVars());
    data.name = lexicon
        .names
        .vars
        .exclude(usedNames)
        .pick()[0];


    if (type) {
        data.value = primitiveValue(type);
    } else {
        if (Math.chance(0.5)) {
            data.value = primitiveValue();
        } else {
            data.value = createOperation();
        }
    }

    let newVar = new Var(data.name, data.value);

    register.insertVar(newVar);
    return `${['var', 'let'].getRandom()} ${newVar.identifier} = ${newVar.value};`
}

// sss