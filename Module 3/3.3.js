function countChar(string, keyword) {
    let count = 0;
    for (let n = 0; n < string.length; n++) {
        if (string[n] === keyword)
            count++;
    }
    return count;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBBBBBB"));