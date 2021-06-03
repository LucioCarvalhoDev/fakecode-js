import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";
export const createAssignment = function () {
    const res = [];
    res.push(Object.keys(register.global.vars).pick()[0]);
    res.push("=");
    res.push(Math.chance(0.4) ? primitiveValue() : createOperation());
    return res.join(" ");
};
