import { Var } from "./Var";

export const int = function (maxSize: number) {
    return Math.trunc(Math.random() * (maxSize + 1));
}
