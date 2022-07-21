const prompt = require("prompt-sync")();

 let num=parseInt(prompt("Enter a number: "))
 flag=0;
 
 for(let i=2;i<(num/2)+1;i++){
     if(num % i==0){
         flag=1
         break
     }
 }
 if(flag==1){

     console.log("It is Not a Prime Number")
 }
 else{
     console.log("It is a Prime Number")
 }