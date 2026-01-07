/*
1. Initialize Game Variables
  - Set `humanScore = 0`
  - Set `computerScore = 0
  - Set `roundsPlayed = 0

2. Function: `getComputerChoice()`
  - Randomly select a choice using `Math.floor`
  - Return the selected choice
  
3. Function: `getHumanChoice()`
  - Prompt user to enter their choice (e.g., "Enter rock, paper, or scissors:")
  - Read user input
  - Convert input to lowercase
  - Return input
  
4. Function: `playRound(humanChoice, computerChoice)`
  - Call `getComputerChoice()` -> store in `computerChoice`
  - Call `getHumanChoice()` -> store in `humanChoice`
  - Determine winner and store in `winner`
  - Log round results: "You chose [`humanChoice`], computer chose [`computerChoice`].
    [`winner`] wins the round."
  - Returns `winner` to `playGame()` function
  
5. Function: `playGame()`
  - While `roundsPlayed < 5`:
    - Call `playRound()`
    - Update score:
      - If `winner == "human"` -> `humanScore++`
      - If `winner == "computer"` -> 'computerScore++`
    - Increment `roundsPlayed`
  - After 5 rounds:
    - Log final scores: "Final scores: Human = [humanScore], Computer = [computerScore]"
    - Determine and log overall winner:
      - If `humanScore > computerScore` -> "You win the game!"
      - if `computerScore > humanScore` -> "Computer wins the game!"
      - if `humanScore == computerScore` -> "The game is a tie!"
  
6. Main Execution:
  - Call `playGame()` to start the game
*/