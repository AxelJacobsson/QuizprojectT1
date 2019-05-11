// *** GENERATE NEW QUIZ ***

// Shuffle our array of questions
shuffle(allQuestions);

// Create new array "assessmentQuiz" with 16 questions
const assessmentQuiz = allQuestions.slice(0, 5);




// *** SET INITIAL VALUES TO 0 ***

// Initial question number is set to index 0
let questionNumber = 0;

// Initial score is set to 0
let score = 0;




//  *** APP GAME CONTROLLER ***

let activeUser = getUsers(); // Import user from local storage

if (location.href.includes('index.html')) {
    welcomeFlow()
}

else if (location.href.includes('instructions.html')) {
    instructionsFlow()
}

else if (location.href.includes('quiz.html')) {
    // Check if there is a user in local storage. If not, redirect to welcome screen
    if (getUsers() == null) {
        location.assign('index.html')
    } else {
        updateUI()
    }
}

else if (location.href.includes('results.html')) {
    showResults()
}