const prompt = require("prompt-sync")()
let year = prompt("Enter the Year :- ")

if (year%4 == 0 || year%400 == 0) {
    console.log(year+" is a Leap Year");
}else if (year%100 != 0) {
    console.log(year+ " is not a leap year");
}else {
   throw 'please enter proper value for year';
}