import { register } from "../repo/register.js";
import { primitiveTypes, primitiveValue } from "./primitiveValue.js";

export const createOperation = function (type: primitiveTypes = 'any') {

    const res: string[] = [];
    let end = false;

    //pega variavel
    const initialVar = register.getVar();
    if (!initialVar) return;
    res.push(initialVar.identifier);


    //adiciona operador e operando n vezes
    do {
        res.push(operator());

        if (Math.chance(0.5)) {
            const listVars = register.getVarsByType('global', type);

            if (listVars.length == 0) {
                res.push("" + primitiveValue(type))
            } else {
                res.push(listVars.getRandom().identifier)
            }


        } else {
            res.push("" + primitiveValue())
        }

        end = Math.chance(0.55) ? true : false;
    } while (!end)

    return res.join(" ");
}

function operator() {
    return ["+", "-", "*", "/", "%"].getRandom();
}

function typeConversor(type: primitiveTypes) {
    function equals(target: any, ...options: any): boolean {
        return options.indexOf(target) > -1
    }

    if (equals(type, 'number', 'number', 'number', 'falsy'))
        return 'number';
    if (equals(type, 'string'))
        return 'string';
    if (equals(type, 'bool'))
        return 'boolean';
}

//ass