// Initialize scores
let userScore = 0;
let compScore = 0;

// Function to get the computer's choice
function getCompChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to get the user's choice requires Even Listner
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
  choice.addEventListener('click', function() {
    // Get the user's choice
    const userChoice = this.id;

    // Play a round with the user's choice
    playRound(userChoice);
  });
});

// Function to update the score board
function updateScore(winner) {
  if (winner === 'user') {
    userScore++;
    document.querySelector('#userScoreVal').innerText = userScore;
  } else if (winner === 'comp') {
    compScore++;
    document.querySelector('#compScoreVal').innerText = compScore;
  }
}

// Function to determine the winner of a round
function getWinner(userChoice, compChoice) {
  // Check for tie
  if (userChoice === compChoice) {
    return 'tie';
  }

  // Check for user win
  if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    return 'user';
  }

  // Otherwise, the computer wins
  return 'comp';
}

// Function to display the results of a round
function displayResults(winner, userChoice, compChoice) {
  // Update the result text
  document.querySelector('#result-user-stat').textContent = `User: ${userChoice}`;
  document.querySelector('#result-comp-stat').textContent = `Computer: ${compChoice}`;
  document.querySelector('#result-final-stat').textContent = `Winner: ${winner}`;
}

// Function to play a round of Rock Paper Scissors
function playRound(userChoice) {
  // Get the computer's choice
  const compChoice = getCompChoice();

  // Determine the winner
  const winner = getWinner(userChoice, compChoice);

  // Update the score board
  updateScore(winner);

  // Display the results
  displayResults(winner, userChoice, compChoice);
}
