function range(start, end, step) {
    step = (step === undefined || step === 0) ? (start > end ? -1 : 1) : step;
    let array = [];
    for (let i = start; (step > 0 ? i <= end : i >= end); i += step)
        array.push(i)
    return array
}
function sum(array) {
    let n = 0;
    for (let i = 0; i <= array.length; i++)
        n += i
    return n
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));