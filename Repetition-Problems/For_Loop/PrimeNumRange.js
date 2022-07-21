const prompt = require("prompt-sync")();
let start=parseInt(prompt("Enter start number for a range: "))
let end=parseInt(prompt("Enter end number for a range : "))
//loop for range
for(let j=start;j<=end;j++)
{
    flag=0;
    for(let i=2;i<(j/2)+1;i++){
        //check divisiblity
        if(j%i==0){
            flag=1
            break
        }
    }
    if(flag==0){
        console.log(j)
    }
}