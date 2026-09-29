"use strict";
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log(`${someText}`, num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
const num1 = 12;
const num2 = 21;
add(num1, num2, true, "here: ");
