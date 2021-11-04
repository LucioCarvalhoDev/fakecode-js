import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";
export const createAssignment = function () {
    const firstTerm = (Object.keys(register.listVars()).pick()[0]);
    const secondTerm = ((Math.chance(0.4) ? primitiveValue() : createOperation()));
    return `${firstTerm} = ${secondTerm};`;
};
