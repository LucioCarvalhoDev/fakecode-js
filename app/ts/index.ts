import "./lib/luk.js";
import { int } from "./modules/basic/int.js";
import { logic } from "./modules/basic/logic.js";
import { createOperation } from "./modules/createOperation.js";
import { createVar } from "./modules/createVar.js";
import { primitiveValue } from "./modules/primitiveValue.js";
import { register } from "./repo/register.js";

console.log("====")//divider
createVar();
createVar();
createVar();
createVar();
createVar();
// createOperation();
console.log(createOperation())
// createVar();
// console.log(createVar())
// console.log(register.global.vars)