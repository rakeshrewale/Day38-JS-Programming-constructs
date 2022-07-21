const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number : "));
let fact = 1;
//loop for factorial
for(let i=1;i<=num;i++)
{
    fact=fact*i;
}
console.log(num+" Factorial is: " +fact);