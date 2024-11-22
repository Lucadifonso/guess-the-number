//setup min and max number
const minNum=1;
const maxNum=100;

//generate a random integer
const answer= Math.floor(Math.random() * (maxNum-minNum + 1));
//why I need that +1?!?!

let attempts = 0;
let guess;
let running = true; //this boolean is to keep the game running

while(running){
    guess= window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess =Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if (guess<minNum || guess >maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if (guess<answer){
            window.alert("Too low, try again");
        }
        else if (guess>answer){
            window.alert("Too high, try again");
        }
        else{
            window.alert(`You got it! The answer was ${answer}, it took you ${attempts} attempts`);
            running = false;
        }
    }
}