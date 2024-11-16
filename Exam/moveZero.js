let moveZero = function (nums) {
    let temp
    for (let i = 0; i < nums.length; i++)
        for (let j = 0; j < nums.length - 1; j++)
            if (nums[j] === 0) {
                temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }

    return nums
}

nums = [0, 1, 0, 3, 4]
console.log(moveZero(nums))
