import Srand from "seeded-rand";
import "./lib/luk.js";
import { createAssignment } from "./modules/createAssignment.js";
import { createCondicional } from "./modules/createCondicional.js";
import { createVar } from "./modules/createVar.js";
const seed = Math.trunc(Math.random() * 100000);
Srand.seed(seed);
export const fakeCodeJs = function () {
    const res = [];
    let i = 0;
    do {
        res.push(step(i));
        i++;
    } while (Math.chance(1 - i / 9));
    return res.join(`
`);
};
const step = function (n) {
    if (n === 0) {
        return createVar();
    }
    else if (Math.chance(0.6 - n * 0.1)) {
        return createVar();
    }
    else {
        return Math.chance(0.5) ? createAssignment() : createCondicional();
    }
};
console.log("====");
console.log(Srand._seed);
console.log(fakeCodeJs());
