import { register } from "../repo/register.js";
import { primitiveValue } from "./primitiveValue.js";

export const createOperation = function () {

    const res: string[] = [];
    let vars = Object.keys(register.global.vars);
    let end = false;

    //pega variavel
    res.push(selectVar(vars));


    //adiciona operador e operando n vezes
    do {
        res.push(operator());
        res.push(Math.chance(0.4) ? primitiveValue() : vars.pick()[0]);

        end = Math.chance(0.55) ? true : false;
    } while (!end)

    return res.join(" ");
}

function selectVar(arr: any[]) {
    let selected = arr.pick()[0];
    return selected;
}

function operator() {
    return ["+", "-", "*", "/", "%"].pick()[0];
}
