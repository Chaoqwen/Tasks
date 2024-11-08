function reverseArray(array) {
    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i])
    }
    return arr
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array
}

console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))
