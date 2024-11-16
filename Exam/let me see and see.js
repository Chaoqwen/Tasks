/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (Object.keys(obj) == [])
        return true
    else
        return false
}

console.log(isEmpty({}))
console.log(isEmpty([1, 2]))