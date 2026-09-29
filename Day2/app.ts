// Object, Array, tuple, Enum

// Object
const person: {
    firstName: string;
    age: number;
    personalInfo: {
        city: string;
        state: string;
        code: number;
    }
} = {
    firstName: "Yash",
    age: 23,
    personalInfo: {
        city: 'Aligarh',
        state: 'Uttar Pradesh',
        code: 202001
    }
}

// Array
const employee: {
    name: string;
    exp: number;
    skills: string[];
} = {
    name: "yash verma",
    exp: 2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript']
}


// Tuple

const candidate: {
    name: string;
    id: number;
    techStack: string[];
    product: [number, string];  // fixes array of two types
} = {
    name: 'yash',
    id: 1,
    techStack: ["Python Developer", "MERN Stack Developer"],
    product: [12, "Macbook m2"]
}


console.log(person.firstName, person.age);
console.log(person.personalInfo);


// Enum

enum Role  {ADMIN, AUTHOR, USER}

const personCandidate: {
    name: string;
    age: number;
    product: [number,string];
    role: Role;
} = {
    name: 'yash verma',
    age: 24,
    product: [12, "qwert"],
    role: Role.ADMIN,
}

if (personCandidate.role === Role.ADMIN) {
    console.log("ADMIN")
}
else if (personCandidate.role === Role.AUTHOR) {
    console.log("AUTHOR")
}
else if (personCandidate.role === Role.USER) {
    console.log("USER")
}