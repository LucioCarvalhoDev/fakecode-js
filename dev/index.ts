import "./lib/luk.js";
import { createAssignment } from "./modules/createAssignment.js";
import { createCondicional } from "./modules/createCondicional.js";
import { createOperation } from "./modules/createOperation.js";
import { createVar } from "./modules/createVar.js";
import { register } from "./repo/register.js";

export const fakeCodeJs = function (): string {
    const res: string[] = [];
    let i = 0;

    do {
        res.push(step(i));
        i++;
    } while (Math.chance(1 - i / 9))

    return res.join(`
`)
}
const step = function (n: number): string {
    if (n === 0) {
        return createVar();
    } else if (n < 2 && Math.chance(0.8 - n / 5)) {
        return createVar();
    } else {
        return Math.chance(0.5) ? createAssignment() : createCondicional();
    }
}

console.log("====")

// console.log(register.getVar())
// console.log(createVar())
// console.log(createVar())
// console.log(createAssignment())
// console.log(str())
// console.log(register)
// console.log(register.listVars())
console.log(fakeCodeJs())
// console.log(register.getVar())


// console.log(createVar('string'))
// console.log(createVar('string'))
// // console.log(createAssignment())
// // console.log(createOperation('any'))
// console.log(createAssignment())




// asdsjim