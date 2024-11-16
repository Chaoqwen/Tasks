/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    // 等待两个 Promise 解析的结果
    const [result1, result2] = await Promise.all([promise1, promise2]);
    // 返回它们的和
    return result1 + result2;
};

// 示例用法：
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4

addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(2), 20)),
    new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(console.log); // 7

addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(10), 50)),
    new Promise(resolve => setTimeout(() => resolve(-12), 30))
).then(console.log); // -2
