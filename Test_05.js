let count = 1;
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let rowOutput = "";
    for (let j = 1; j <= i; j++) {
        rowOutput += count + " ";
        count++;
    }
    console.log(rowOutput.trim());
}