import Srand from "seeded-rand";
import { Var } from "./Var";

export const int = function (maxSize: number) {
    return Math.trunc(Srand.random() * (maxSize + 1));
}
