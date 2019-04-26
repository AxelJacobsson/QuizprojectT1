// Import HTML elements
let question = document.getElementById('question');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let feedback = document.getElementById('feedback');
let showCorrectAnswer = document.getElementById('showCorrectAnswer');
let highScore = document.getElementById('highScore');
let nextQuestion = document.getElementById('nextQuestion');
let endQuiz = document.getElementById('endQuiz');
let totalQuestions = document.getElementById('totalQuestions');
let userScore = document.getElementById('score');
let checkAnswer = document.getElementsByClassName('option-buttons');
let currentQuestion = document.getElementById('currentQuestion');

// Shuffle our array of questions
shuffle(allQuestions);

// Create new array "assessmentQuiz" with only 16 questions (right now its only 6 questions)
const assessmentQuiz = allQuestions.slice(0, 6);

// Initial question number is set to index 0
let questionNumber = 0;

// Initial score is set to 0
let score = 0;



//  ***APP GAME CONTROLLER***

let activeUser = getUsers(); // What does this do exactly?

// Run welcome flow if user is on index.html
if (location.href.includes('index.html')) {
    welcomeFlow()
}

// Get name from local storage and display on instructions page and start quiz
else if (location.href.includes('instructions.html')) {
    instructionsFlow()
}

else if (location.href.includes('quiz.html')) {
    // Check if there is a user in localstorage. If not, redirect to welcome screen (This does not seem to work???????????????????????????????????????????????
    if (getUsers() == null) {
        location.assign('index.html')
    } else {
        updateUI()
    }
}

else if (location.href.includes('results.html')) {
    showResults()
}