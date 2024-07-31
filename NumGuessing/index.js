const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`guess a num between ${minNum}-${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess<minNum||guess>maxNum){
        window.alert("Please enter valid num");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("too low");
        }
        else if(guess>answer){
            window.alert("too high");
        }
        else{
            window.alert("correct");
            running=false;
        }
    }
    
}
