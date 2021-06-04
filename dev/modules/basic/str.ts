import { int } from "./int.js";

export const str = function (len: number = Math.between(1, 15)): string {

    const res: string[] = ['"'];

    while (res.length < len) {
        res.push(String.fromCharCode(Math.between(97, 123)));
    }

    res.push('"');

    return res.join("");
}