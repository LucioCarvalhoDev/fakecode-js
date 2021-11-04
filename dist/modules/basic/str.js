import { lexicon } from "../../repo/lexicon.js";
export const str = function (len = Math.between(0, 6)) {
    const res = ['"'];
    if (len == 0) {
        res.push(lexicon.names.words.getRandom());
    }
    else if (Math.chance(0.8)) {
        while (res.length < len) {
            res.push(String.fromCharCode(Math.between(97, 123)));
        }
    }
    else {
        res.push('#' + Math.round(16777215 * Math.random()).toString(16));
    }
    res.push('"');
    return res.join('');
};
