import { register } from "../repo/register.js";
import { logic } from "./basic/logic.js";
import { createAssignment } from "./createAssignment.js";
import { primitiveValue } from "./primitiveValue.js";

export const createCondicional = function () {
    const res: string[] = [];
    let end = false;

    let header: string;
    let main: string[] = [];
    let footer = "}"

    header = `if (${comparation()}) {`;
    res.push(header);

    do {
        let line: string = "    ";

        line += createAssignment();

        main.push(line);

        end = Math.chance(0.4) ? true : false;

    } while (!end)

    res.push(main.join(`
`))

    res.push(footer);
    return res.join(`
`)
}

function comparation(): string {
    const res: string[] = [];

    let firstTerm = Object.keys(register.global.vars).pick()[0];
    res.push(firstTerm);

    let secondTerm = logic();
    res.push(secondTerm);

    let thirdTerm = Math.chance(0.5) ? primitiveValue() : Object.keys(register.global.vars).pick()[0];
    res.push(thirdTerm);

    return res.join(" ")
}