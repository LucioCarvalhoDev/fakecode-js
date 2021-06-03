import "../../lib/luk.js";
export const logic = function () {
    return ["==", "===", ">", ">=", "<", "<=", "!="].pick()[0];
};
