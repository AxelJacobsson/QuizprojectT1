// *** GENERATE NEW QUIZ ***

// Shuffle our array of questions
shuffle(allQuestions);

// Create new array "assessmentQuiz" with only 16 questions (right now its only 6 questions)
const assessmentQuiz = allQuestions.slice(0, 16);




// *** SET INITIAL VALUES TO 0 ***

// Initial question number is set to index 0
let questionNumber = 0;

// Initial score is set to 0
let score = 0;




//  *** APP GAME CONTROLLER ***

let activeUser = getUsers(); // Import user from local storage

// Run welcome flow if user is on index.html
if (location.href.includes('index.html')) {
    welcomeFlow()
}

// Get name from local storage and display on instructions page and start quiz
else if (location.href.includes('instructions.html')) {
    instructionsFlow()
}

else if (location.href.includes('quiz.html')) {
    // Check if there is a user in local storage. If not, redirect to welcome screen (This does not seem to work???????????????????????????????????????????????
    if (getUsers() == null) {
        location.assign('index.html')
    } else {
        updateUI()
    }
}

else if (location.href.includes('results.html')) {
    showResults()
}