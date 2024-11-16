/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num; // 对所有元素进行异或运算
    }

    return result; // 返回只出现一次的元素
};

// 示例用法：
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
