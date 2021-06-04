import { register } from "../repo/register.js";
import { primitiveValue } from "./primitiveValue.js";

export const createOperation = function () {

    const res: string[] = [];
    let end = false;

    //pega variavel
    const value = register.getVar();
    if (!value) return;
    res.push(value);


    //adiciona operador e operando n vezes
    do {
        res.push(operator());

        if (Math.chance(0.5)) {

            res.push(register.getVar());
        } else {
            res.push("" + primitiveValue())
        }

        end = Math.chance(0.55) ? true : false;
    } while (!end)

    return res.join(" ");
}

function operator() {
    return ["+", "-", "*", "/", "%"].pick()[0];
}
