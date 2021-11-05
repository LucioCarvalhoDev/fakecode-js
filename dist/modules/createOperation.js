import { register } from "../repo/register.js";
import { primitiveValue } from "./primitiveValue.js";
export const createOperation = function (type = 'any') {
    const res = [];
    let end = false;
    const initialVar = register.getVar();
    if (!initialVar)
        return;
    res.push(initialVar.identifier);
    do {
        res.push(operator());
        if (Math.chance(0.5)) {
            const listVars = register.getVarsByType('global', type);
            if (listVars.length == 0) {
                res.push("" + primitiveValue(type));
            }
            else {
                res.push(listVars.getRandom().identifier);
            }
        }
        else {
            res.push("" + primitiveValue());
        }
        end = Math.chance(0.55) ? true : false;
    } while (!end);
    return res.join(" ");
};
function operator() {
    return ["+", "-", "*", "/", "%"].getRandom();
}
function typeConversor(type) {
    function equals(target, ...options) {
        return options.indexOf(target) > -1;
    }
    if (equals(type, 'number', 'number', 'number', 'falsy'))
        return 'number';
    if (equals(type, 'string'))
        return 'string';
    if (equals(type, 'bool'))
        return 'boolean';
}
