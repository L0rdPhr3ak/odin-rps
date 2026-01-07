
/*
1. Function: `getComputerChoice()`
    - Randomly select a choice using `Math.floor`
    - Return the selected choice
*/

/*  
2. Function: `getHumanChoice()`
    - Prompt user to enter their choice (e.g., "Enter rock, paper, or scissors:")
    - Read user input
    - Convert input to lowercase
    - Return input
*/

/*  
3. Function: `playRound(humanChoice, computerChoice)`
    - Takes `humanChoice` and `computerChoice` as parameters
    - Determine winner based on the two choices and store in `winner`
    - Log round results: "You chose [`humanChoice`], computer chose [`computerChoice`].
      [`winner`] wins the round."
    - Returns `winner` to `playGame()` function as `"human"`, `"computer"`, or `"tie"`
*/

/* 
4. Function: `playGame()`
    - Initialize game variables
      - Set `humanScore = 0`
      - Set `computerScore = 0`
      - Set `roundsPlayed = 0`
    - While `roundsPlayed < 5`:
      - Call `const humanSelection = getHumanChoice()`
      - Call `const computerSelection = getComputerChoice()`
      - Call `let winner = playRound(humanSelection, computerSelection)`
      - Update score:
        - If `winner == "human"` -> `humanScore++`
        - If `winner == "computer"` -> `computerScore++`
        - If `winner == "tie"` -> no score increment
      - Increment `roundsPlayed++`
    - After 5 rounds:
      - Log final scores: "Final scores: Human = [humanScore], Computer = [computerScore]"
    - Determine and log overall winner:
      - If `humanScore > computerScore` -> "You win the game!"
      - if `computerScore > humanScore` -> "Computer wins the game!"
      - if `humanScore == computerScore` -> "The game is a tie!"
*/

/*
5. Main Execution:
    - Call `playGame()` to start the game
*/