import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";
export const createAssignment = function () {
    const variable = register.getVar();
    const secondTerm = ((Math.chance(0.4) ? primitiveValue() : createOperation()));
    return `${variable.identifier} = ${secondTerm};`;
};
