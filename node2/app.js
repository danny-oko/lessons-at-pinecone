const args = process.argv;
console.log(args);

let first = Number(args[2]);
let second = Number(args[4]);
let operator = String(args[3]);

function logic(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "/":
      console.log(a / b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "%":
      console.log(a % b);
      break;
  }
}
console.log(logic(first, second, operator));
