function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

function test(n) {
    return n % 2 === 0;
}

function update(n) {
    return n / 2;
}

loop(8, test, update, console.log);