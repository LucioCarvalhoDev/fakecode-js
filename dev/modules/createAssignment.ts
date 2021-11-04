import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";

export const createAssignment = function () {
    // const res: string[] = [];

    //primeiro termo
    const firstTerm = (Object.keys(register.listVars()).pick()[0]);

    //segundo termo;
    const secondTerm = ((Math.chance(0.4) ? primitiveValue() : createOperation()));

    return `${firstTerm} = ${secondTerm};`
}

// 