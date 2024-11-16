/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
let isEmpty = function (obj) {
    if (!obj.keys || !obj)
        return true
    else
        return false
}

let obj = {}
let obj2 = { 'x': 5 }
let obj3 = [1, 2, 3, 4, 5]
console.log(isEmpty(obj))
console.log(isEmpty(obj2))
console.log(isEmpty(obj3))
Object.keys