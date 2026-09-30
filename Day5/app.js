"use strict";
let userInput;
// let userInput: any;
let userName;
userInput = 10;
userName = "Tony";
// userName = userInput
if (typeof userInput === "string") {
    userName = userInput;
}
// Never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
generateError("Internal server error", 500);
