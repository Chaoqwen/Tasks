let size = 8;
let line = ""
for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
        if (row % 2 !== 0) { // 奇数行
            if (column % 2 === 0) { // 偶数列
                line += "#";
            } else {
                line += " "; // 奇数列
            }
        } else { // 偶数行
            if (column % 2 === 0) { // 偶数列
                line += " ";; // 奇数列
            } else {
                line += "#"; // 奇数列
            }
        }
        if (column === size - 1) {
            line += "\n";
        }
    }
}
console.log(line)