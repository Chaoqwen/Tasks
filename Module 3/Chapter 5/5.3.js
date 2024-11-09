function every(array, test) {
    for (let num of array) {
        if (!test(num))
            return false;
    }
    return true;
}

function test(n) {
    return n % 1 === 0;
}

function everySec(array, test) {
    return !array.some(function (num) {
        return !test(num);
    });
}


console.log(every([1, 2, 3, 4, 5], test)); // true
console.log(every([1, 2, 3, 4, 5.5], test)); // false
console.log(everySec([1, 2, 3, 4, 5], test)); // true
console.log(everySec([1, 2, 3, 4, 5.5], test)); // false