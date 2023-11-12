const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play a game? ");

if (answer.toLowerCase() === "yes");{
    const answer2 = prompt("Would you like to go left or right? (left/right)?");
    
    if (answer2 === "y"){
        console.log("Oops, you go left and fall of a bridge! You lost");
}else{
    // right

    console.log("Nice You go right and approach a bridge...");
    const answer3 = prompt("Would you like to cross the bridge, or turn around and find another way (cross/turn?");

    if (answer3 === "cross"){
        console.log("You cross the bridge and reach of the end of the game!");
    }
}else {
    console.log("You turn back and the trip on a log and hurt your leg. You lost!") ;
}
}else{
    console.log("That's too bad maybe another time!");
}
