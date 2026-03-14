let rows = 9;

for (let i = 1; i <= rows; i++) {

    if (i === 1 || i === rows) {
        console.log("*");
    } 
    else if (i === 2 || i === rows - 1) {
        console.log("**");
    } 
    else {
        console.log("* *");
    }

}