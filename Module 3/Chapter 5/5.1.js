let array = [[1], [2], [3]];

function combine(array) {
    let newArray = [];
    for (let num of array)
        newArray.push(...num)
    return newArray;
}
console.log(combine(array)); // [1, 2, 3]