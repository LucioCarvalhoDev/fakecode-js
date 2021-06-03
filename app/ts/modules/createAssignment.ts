import { register } from "../repo/register.js";
import { createOperation } from "./createOperation.js";
import { primitiveValue } from "./primitiveValue.js";

export const createAssignment = function () {
    const res: string[] = [];

    //primeiro termo
    res.push(Object.keys(register.global.vars).pick()[0]);

    res.push("=");

    //segundo termo;
    res.push(Math.chance(0.4) ? primitiveValue() : createOperation());

    return res.join(" ");
}