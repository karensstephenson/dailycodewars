// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

function rockPaperScissors (p1, p2) {
    return p1 === p2 ? "Draw!" 
    : (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors") 
    ? "Player 1 won!"
    : "Player 2 won!"
}

console.log(rockPaperScissors("scissors", "rock"))
console.log(rockPaperScissors("scissors", "paper"))
console.log(rockPaperScissors("paper", "paper"))