import { register } from "../repo/register.js";
export const createOperation = function () {
    const res = [];
    let vars = Object.keys(register.global.vars);
    let end = false;
    res.push(selectVar(vars));
    do {
        res.push(operator());
        res.push(selectVar(vars));
        end = Math.chance(0.55) ? true : false;
    } while (!end);
    return res.join(" ");
};
function selectVar(arr) {
    let selected = arr.pick()[0];
    arr = arr.exclude([selected]);
    return selected;
}
function operator() {
    return ["+", "-", "*", "/", "%"].pick()[0];
}
