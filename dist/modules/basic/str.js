export const str = function (len = Math.between(1, 15)) {
    const res = ['"'];
    while (res.length < len) {
        res.push(String.fromCharCode(Math.between(97, 123)));
    }
    res.push('"');
    return res.join("");
};
