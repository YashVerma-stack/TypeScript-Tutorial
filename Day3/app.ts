// UNION, TYPE ALIAS(CUSTOM TYPES), AND LITERAL TYPES

// UNION

function combine(
  num1: number | string,
  num2: number | string,
): number | string {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

const sum = combine(10, 23);
const combineName = combine("doraemon", "michan");

console.log(sum, combineName);

// LITERAL TYPE

const travelor: {
  name: string;
  age: number;
  coach: "1 tier" | "2 tier" | "3 tier" | "sleeper";
  seat:
    | "middle birth"
    | "lower birth"
    | "upper birth"
    | "side lower"
    | "side upper";
} = {
  name: "yash",
  age: 24,
  coach: "3 tier",
  seat: "side lower",
};

console.log(
  `Travelor's information: ${travelor.name}, ${travelor.age}, ${travelor.coach}, ${travelor.seat}`,
);

// TYPE ALIAS

type Combinable = string | number;

function concat(variable1: Combinable, variable2: Combinable): Combinable {
  let result;
  if (typeof variable1 === "number" && typeof variable2 === "number") {
    result = variable1 + variable2;
  } else {
    result = variable1.toString() + variable2.toString();
  }

  return result;
}

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "tony",
  age: 34,
  skills: ["reactjs", "nodejs"],
};

function greet(user: User) {
  console.log(
    `Hi there I am ${user.name}, my age is ${user.age}, and my skills are ${user.skills}`,
  );
}

greet(user);
