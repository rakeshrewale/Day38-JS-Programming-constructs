"use strict";
var ps = require("prompt-sync")
var prompt = ps();

function toFar(){
    var degC = prompt("Enter the Temp value ");
    var degF = (degC *9/5)+32;
    console.log("Temp in Far is: "+degF);
}

function toCel(){
    var degF = prompt("Enter the Temp value ");
    var degC= (degF -32)*(5/9);
    console.log("Temp in Cel is: "+degC);
}
console.log("Enter the option: ");
var select =  parseInt(prompt("1. degC->degF , 2. degF->degC"));
console.log("Selected option is: "+select);

switch (select){
    case 1:
        toFar();
        break;

    case 2:
        toCel();
        break;
    
    default:
        console.log("Enter valid values!!!! ")        
        break;
    }