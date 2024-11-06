for (counter = 1; counter <= 100; counter++) {
    let ot = "";
    if (counter % 3 == 0)
        ot += "Fizz";
    if (counter % 5 == 0)
        ot += "Buzz";
    console.log(ot || counter);
} n