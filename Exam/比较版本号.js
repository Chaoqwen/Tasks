/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1temp = version1.split('.')
    let v2temp = version2.split('.')
    return v1temp
};
console.log(compareVersion('1.1.1', '1.0.0'))