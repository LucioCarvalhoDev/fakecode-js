import Srand from "seeded-rand";
export const int = function (maxSize) {
    return Math.trunc(Srand.random() * (maxSize + 1));
};
