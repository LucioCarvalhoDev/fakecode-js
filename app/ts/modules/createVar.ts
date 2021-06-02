import "../lib/luk.js";
import { lexicon } from "../repo/lexicon.js";
import { primitiveValue } from "./primitiveValue.js";

export const createVar = function () {

    const result: string[] = ["var"];

    // primeiro termo
    result.push(lexicon.names.vars.pick()[0]);

    // "="
    result.push("=")

    result.push(primitiveValue() + ";")

    return result.join(" ")
}

