const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play a game? ");

// Make sure to remove the semicolon after the if statement
if (answer.toLowerCase() === "yes") {
    const answer2 = prompt("Would you like to go left or right? (left/right)?");
    
    if (answer2.toLowerCase() === "left") { // Changed "y" to "left" and added toLowerCase()
        console.log("Oops, you go left and fall off a bridge! You lost");
    } else {
        // right

        console.log("Nice! You go right and approach a bridge...");
        const answer3 = prompt("Would you like to cross the bridge, or turn around and find another way (cross/turn)?");

        if (answer3.toLowerCase() === "cross") { // Added toLowerCase()
            console.log("You cross the bridge and reach the end of the game!");
        } else {
            console.log("You turn back and trip on a log and hurt your leg. You lost!");
        }
    }
} else {
    console.log("That's too bad, maybe another time!");
}
