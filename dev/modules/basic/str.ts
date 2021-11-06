import Srand from "seeded-rand";
import { lexicon } from "../../repo/lexicon.js";
import { int } from "./int.js";
import { Var } from "./Var.js";

export const str = function (len: number = Math.between(0, 6)) {

    const res: string[] = ['"'];

    if (len == 0) {
        res.push(lexicon.names.words.getRandom())
    } else if (Math.chance(0.8)) {
        while (res.length < len) {
            res.push(String.fromCharCode(Math.between(97, 123)));
        }
    } else {
        res.push('#' + Math.round(16777215 * Srand.random()).toString(16))
    }

    res.push('"');

    return res.join('');
}