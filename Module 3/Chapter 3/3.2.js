function isEven(number) {
    if (number === 1)
        return false;
    else if (number === 0)
        return true;
    else if (number > 1)
        return isEven(number - 2);
    else if (number < 0)
        return isEven(number = -number)
}
console.log(isEven(-1))