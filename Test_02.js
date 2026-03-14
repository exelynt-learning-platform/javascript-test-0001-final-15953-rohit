let rows = 5;

for (let i = rows; i >= 1; i--) {
    let num = 1;
    let line = " ";

    for (let j = 0; j <i; j++) {
        line += num + " ";
        num = num * (i - j - 1) / (j + 1);
    }

    console.log(line.trim());
}