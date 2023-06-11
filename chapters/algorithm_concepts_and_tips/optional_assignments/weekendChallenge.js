const prompt = require('readline-sync');

// define an array of questions and answers
const questionAndAnswers = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What is the largest planet in the solar system?",
        answer: "Jupiter"
    },
    {
        question: "What country won the 2022 FIFA World Cup?",
        answer: "Argentina"
    }
];

// Prompt the user for their name
const userName = prompt.question('What is your name, playa?\n');
console.log(`That's what's up, ${userName}. Let's get quizzical.\n`)

let numQuestions = 0;
let numCorrect = 0;

for (const { question, answer } of questionAndAnswers) {
    const response = prompt.question(`\n${userName}: ${question}\n`);

    // Check if the user wants to quit
    if (response.toUpperCase() === 'Q') {
        console.log(`${userName} you're a quitter!`)
        break;
    }

    // Check if the user's answer is correct
    if (response.toLowerCase() === answer.toLowerCase()) numCorrect++;
    
    numQuestions++;
}

// Print the statistics of the game
console.log(`\nHere is your final score, ${userName}!`);
console.log(`Number of questions answered: ${numQuestions}`);
console.log(`Number of questions correct: ${numCorrect}`);