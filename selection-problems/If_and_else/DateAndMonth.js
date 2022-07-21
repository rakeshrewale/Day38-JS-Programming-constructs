let month =5;
let date = 19;
let flag = true;

if(month>=3 && month<=6) 
{
    if(month == 3 && date <20 )
    {
     flag = false;
    }
    if(date>20 && month ==6)
    {
        flag = false;
    }
    if(flag == false)
    {
    console.log("Invalid date");
    }
    else{
        console.log("Valid date");
    }
    }
else{
    console.log("Invalid date");
}