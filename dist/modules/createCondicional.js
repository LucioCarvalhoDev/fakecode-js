import { register } from "../repo/register.js";
import { logic } from "./basic/logic.js";
import { createAssignment } from "./createAssignment.js";
import { primitiveValue } from "./primitiveValue.js";
export const createCondicional = function () {
    const res = [];
    let end = false;
    let header;
    let main = [];
    let footer = "}";
    header = `if (${comparation()}) {`;
    res.push(header);
    do {
        let line = "    ";
        line += createAssignment();
        main.push(line);
        end = Math.chance(0.4) ? true : false;
    } while (!end);
    res.push(main.join(`
`));
    res.push(footer);
    return res.join(`
`);
};
function comparation() {
    const res = [];
    let firstTerm = Object.keys(register.listVars()).pick()[0];
    res.push(firstTerm);
    let secondTerm = logic();
    res.push(secondTerm);
    let thirdTerm;
    if (Math.chance(0.5)) {
        thirdTerm = register.getVar();
    }
    else {
        thirdTerm = "" + primitiveValue();
    }
    res.push(thirdTerm);
    return res.join(" ");
}
