const prompt = require("prompt-sync")();
//variable
let headWins=0;
let tailWins=0;
//loop to count heads and tails
while(true){
    //break if 11 heads
    if(headWins==11){
        console.log("Head won 11 times");
        break;
    }
    //break if 11 tails
    else if(tailWins==11){
        console.log("Tail won 11 times");
        break;
    }
    //generate randan and count head or tails
    else{
        let flip = Math.floor(Math.random() * 10) % 2;
        if(flip==0){
            headWins++;
        }
        else{
            tailWins++;
        }
    }
}