function whichDirection(string) {
    let ltrCount = 0;
    let rtlCount = 0;

    for (let char of string) {
        let code = char.codePointAt(0);
        let script = characterScript(code);

        if (script) {
            if (script.direction === 'ltr') {
                ltrCount++;
            } else if (script.direction === 'rtl') {
                rtlCount++;
            }
        }
    }

    if (ltrCount > rtlCount) {
        return 'ltr'; // 从左到右
    } else if (rtlCount > ltrCount) {
        return 'rtl'; // 从右到左
    } else {
        return 'neither';
    }
}
console.log(whichDirection('Hello, world!'))