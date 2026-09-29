"use strict";
// UNION, TYPE ALIAS(CUSTOM TYPES), AND LITERAL TYPES
// UNION
function combine(num1, num2) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const sum = combine(10, 23);
const combineName = combine("doraemon", "michan");
console.log(sum, combineName);
// LITERAL TYPE
const travelor = {
    name: "yash",
    age: 24,
    coach: "3 tier",
    seat: "side lower",
};
console.log(`Travelor's information: ${travelor.name}, ${travelor.age}, ${travelor.coach}, ${travelor.seat}`);
function concat(variable1, variable2) {
    let result;
    if (typeof variable1 === "number" && typeof variable2 === "number") {
        result = variable1 + variable2;
    }
    else {
        result = variable1.toString() + variable2.toString();
    }
    return result;
}
const user = {
    name: "tony",
    age: 34,
    skills: ["reactjs", "nodejs"],
};
function greet(user) {
    console.log(`Hi there I am ${user.name}, my age is ${user.age}, and my skills are ${user.skills}`);
}
greet(user);
