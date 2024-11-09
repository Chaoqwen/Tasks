let map = { one: true, two: true, hasOwnProperty: true };

let hasOwnProp = Object.prototype.hasOwnProperty;

console.log(hasOwnProp.call(map, "hasOwnProperty")); // → true
