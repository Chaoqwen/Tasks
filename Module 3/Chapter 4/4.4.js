function deepEqual(a, b) {
    if (a === b)
        return true;
    else if (a === null || b === null)
        return false;
    else if (typeof a === "object" && typeof b === "object") {
        let keysA = Object.keys(a);
        let keysB = Object.keys(b);
        if (keysA.length !== keysB.length) {
            return false;
        }
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
}

let obj = { name: "John", age: 30, city: "New York", };
console.log(deepEqual(obj, obj));// → true
console.log(deepEqual(obj, { name: "John", age: 35, city: "New York", }));// → false