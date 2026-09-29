"use strict";
// Object, Array, tuple, Enum
// Object
const person = {
    firstName: "Yash",
    age: 23,
    personalInfo: {
        city: 'Aligarh',
        state: 'Uttar Pradesh',
        code: 202001
    }
};
// Array
const employee = {
    name: "yash verma",
    exp: 2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript']
};
// Tuple
const candidate = {
    name: 'yash',
    id: 1,
    techStack: ["Python Developer", "MERN Stack Developer"],
    product: [12, "Macbook m2"]
};
console.log(person.firstName, person.age);
console.log(person.personalInfo);
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
const personCandidate = {
    name: 'yash verma',
    age: 24,
    product: [12, "qwert"],
    role: Role.ADMIN,
};
if (personCandidate.role === Role.ADMIN) {
    console.log("ADMIN");
}
else if (personCandidate.role === Role.AUTHOR) {
    console.log("AUTHOR");
}
else if (personCandidate.role === Role.USER) {
    console.log("USER");
}
