let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 10;
userName = "Tony";

// userName = userInput

if (typeof userInput === "string") {
    userName = userInput;
}

// Never return type

function generateError(message: string, code: number): never {
    throw {message: message, statusCode: code}
}

generateError("Internal server error", 500);






