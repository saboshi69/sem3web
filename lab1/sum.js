let num1 = 5;
let num2 = 10;

function sum(a, b) {
  return a + b;
}

let sum1 = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

console.log(sum(num1, num2));

// spread operator
console.log(sum(...[num1, num2]));
console.log(multiply(...[num1, num2]));
console.log(subtract(...[num1, num2]));
