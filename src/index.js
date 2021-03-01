exports.min = function min(array) {
    if (array === undefined || +array === 0) return 0;
    let a = [];
    typeof array !== "object" ? (a = Array.from(arguments)) : (a = array);
    return a.sort((x, y) => x - y)[0];
};

exports.max = function max(array) {
    if (array === undefined || +array === 0) return 0;
    let a = [];
    typeof array !== "object" ? (a = Array.from(arguments)) : (a = array);
    return a.sort((x, y) => y - x)[0];
};

exports.avg = function avg(array) {
    if (array === undefined || +array === 0) return 0;
    let a = [];
    typeof array !== "object" ? (a = Array.from(arguments)) : (a = array);
    return a.reduce((a, b) => a + b, 0) / a.length;
};
