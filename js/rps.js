// Array mapping numeric choices to their string representations
const choices = ["rock", "paper", "scissors"];

/**
 * Returns a random computer choice:
 *   @returns {number} 0, 1, or 2 for rock, paper, or scissors, respectively
 */
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return choice
}

/**
 * Prompts user for their choice and converts it to numeric format
 * @returns {number} 0, 1, or 2 for rock, paper, or scissors, respectively
 */
function getHumanChoice() {
  let answer = prompt("Enter rock, paper, or scissors:");
  switch (answer.toLowerCase()) {
    case "rock":
      answer = 0;
      break;
    case "paper":
      answer = 1;
      break;
    case "scissors":
      answer = 2;
      break;
  }
  return answer
}

/**
 * Plays a single round and returns the winner
 *   @param {number} humanChoice The player's choice (0=rock, 1=paper, 2=scissors)
 *   @param {number} computerChoice The computer's random choice (0=rock, 1=paper, 2=scissors)
 *   @returns {string} "human", "computer", or "tie"
 */
function playRound(humanChoice, computerChoice) {

  if ((humanChoice + 1) % 3 == computerChoice) {
    console.log(
      `You chose: ${choices[humanChoice]}
Computer chose: ${choices[computerChoice]}

Computer wins this round!`
    );
    return "computer";
  } else if (humanChoice == computerChoice) {
    console.log(
      `You chose: ${choices[humanChoice]}
Computer chose: ${choices[computerChoice]}
  
This round is a tie!`
    );
    return "tie";
  } else {
    console.log(
      `You chose: ${choices[humanChoice]}
Computer chose: ${choices[computerChoice]}
  
You won this round!`
    );
    return "human";
  }
}

/**
 * Plays 5 rounds of Rock Paper Scissors and declares the overall winner
 */
function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    const winner = playRound(humanSelection, computerSelection);

    switch (winner) {
      case "human":
        humanScore++;
        break;
      case "computer":
        computerScore++;
        break;
      case "tie":
        break;
    }
    roundsPlayed++;
  }

  if (humanScore > computerScore) {
    console.log(
      `Human Score: ${humanScore}
Computer Score: ${computerScore}
      
Rounds Played: ${roundsPlayed}
      
You win the game!`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Human Score: ${humanScore}
Computer Score: ${computerScore}
      
Rounds Played: ${roundsPlayed}
      
Computer wins the game!`
    );
  } else {
    console.log(
      `Human Score: ${humanScore}
Computer Score: ${computerScore}
   
Rounds Played: ${roundsPlayed}
      
The game is a tie!`
    );
  }
}

// Start the game
playGame();