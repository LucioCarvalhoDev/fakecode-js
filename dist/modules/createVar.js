import "../lib/luk.js";
import { lexicon } from "../repo/lexicon.js";
import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";
import { Var } from "./basic/Var.js";
export const createVar = function (type = 'any') {
    const data = { name: undefined, value: undefined };
    const usedNames = Object.keys(register.listVars());
    data.name = lexicon
        .names
        .vars
        .exclude(usedNames)
        .getRandom();
    if (Math.chance(0.5)) {
        data.value = primitiveValue(type);
    }
    else {
        data.value = createOperation(type);
    }
    let newVar = new Var(data.name, data.value);
    register.insertVar(newVar);
    return `${['var', 'let'].getRandom()} ${newVar.identifier} = ${newVar.value};`;
};
