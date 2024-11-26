/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1temp = version1.split('.').map(Number);
    let v2temp = version2.split('.').map(Number);
    let len = Math.max(v1temp.length, v2temp.length);
    for (let i = 0; i < len; i++) {
        let num1 = v1temp[i] || 0;
        let num2 = v2temp[i] || 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }
    return 0;
};

console.log(compareVersion("1.0.1", "1"));       // 输出: 1
console.log(compareVersion("1.0", "1.0.0"));     // 输出: 0
console.log(compareVersion("0.1", "1.1"));       // 输出: -1
console.log(compareVersion("1.2", "1.10"));      // 输出: -1
console.log(compareVersion("1.0.0", "1.0"));     // 输出: 0