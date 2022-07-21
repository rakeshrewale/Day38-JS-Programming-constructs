"use strict";
var ps = require("prompt-sync")
var prompt = ps();


function palindrome() {
var originalNum; 
var num;
num = parseInt(prompt("Enter the number: "));
originalNum = num;    

var revNum = 0;
var remainder;

while (num > 0) {
remainder = num % 10;    
revNum = (revNum * 10) + remainder
num = parseInt(num / 10);
 }

if (originalNum == revNum){
    console.log("Number is a palindrome")
}else {
    console.log("Number is not a palindrome")
 }

}

palindrome();