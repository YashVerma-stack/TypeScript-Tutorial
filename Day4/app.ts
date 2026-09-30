// FUNCTIONS

function prod(num1: number, num2: number): number {
    return num1 * num2;
};
const result = prod(12, 12);
console.log(result);

function greet(name: string): void {
    console.log(`Hi ${name}`);
};

greet('Tony')

// let combineFunction: Function;

// // combineFunction = 20;     // this will show type error because combineFunction can hold only function not any other datatypein it 
// // combineFunction = function(){}  // this is valid

// combineFunction = greet;
// but actually not a good practice

// Good Practice 

let combineFunction: (a: number, b: number) => number;

// In the combineFunction we can only asign that function whose signature will match to the combineFunction 
// For example greet will give error but prod funtion will be accepted

// combineFunction = greet;  // invalid
combineFunction = prod;



// function type callback
function addHandler(num1: number, num2: number, cb: (num: number) => void) {
    const result = num1 + num2;
    cb(result);
}

addHandler(10, 20, (ans: number) => {
    console.log(ans);
})


