import "../../lib/luk.js";
import { Var } from "./Var.js";

export const logic = function () {
    return ["==", "===", ">", ">=", "<", "<=", "!="].pick()[0]
}