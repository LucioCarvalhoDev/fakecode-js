import "./lib/luk.js";
import { int } from "./modules/basic/int.js";
import { logic } from "./modules/basic/logic.js";
import { createAssignment } from "./modules/createAssignment.js";
import { createCondicional } from "./modules/createCondicional.js";
import { createOperation } from "./modules/createOperation.js";
import { createVar } from "./modules/createVar.js";
import { primitiveValue } from "./modules/primitiveValue.js";
import { register } from "./repo/register.js";

console.log("====")//divider
createVar();
createVar();
// createOperation();
// console.log(createOperation())
// createVar();
// console.log(primitiveValue())
// console.log(createVar())
// console.log(createCondicional())
console.log(createAssignment())
// console.log(register.global.vars)