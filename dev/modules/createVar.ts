import "../lib/luk.js";
import { lexicon } from "../repo/lexicon.js";
import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";

import type { primitiveTypes } from "./primitiveValue.js";
import { Var } from "./basic/Var.js";

type varDefinition = { name: string, value: any }

export const createVar = function (type: primitiveTypes = 'any') {

    const data: varDefinition = { name: undefined, value: undefined }

    // primeiro termo
    const usedNames = Object.keys(register.listVars());
    data.name = lexicon
        .names
        .vars
        .exclude(usedNames)
        .getRandom();



    if (Math.chance(0.5)) {
        data.value = primitiveValue(type);
    } else {
        data.value = createOperation(type);
    }


    let newVar = new Var(data.name, data.value);

    register.insertVar(newVar);
    return `${['var', 'let'].getRandom()} ${newVar.identifier} = ${newVar.value};`
}
// sssssss