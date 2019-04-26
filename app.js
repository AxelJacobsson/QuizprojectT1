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
currentQuestion = 1;

// Shuffle our array of questions
shuffle(allQuestions);

// Create new array with only 16 questions (right now its only 6 questions)
const assessmentQuiz = allQuestions.slice(0, 6);


//  APP Game Controller
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
        //launchQuiz() - Function not created yet - having issues..
        giveFeedback()
    }
}

else if (location.href.includes('results.html')) {
    showResults()
}

// Initial question number is set to index 0
let questionNumber = 0;

updateQuestion(); // Shows the first question of the quiz (index 0)

// Initial score is set to 0
let score = 0;

//When the first question is launched "nextQuestion" button is disabled 
nextQuestion.disabled = true;

//When pressing "nextQuestion" button
nextQuestion.onclick = function (){
    questionNumber++; //Increment question number by 1
    console.log(questionNumber)
    currentQuestion++; //Used for the display of the question count
    
    if(questionNumber === assessmentQuiz.length - 1) {

        updateQuestion();
        resetFeedback();
        resetColorButtons();
        enableOptionButtons();
        document.getElementById('endQuiz').style.display = "block";
        document.getElementById('nextQuestion').style.display= "none"; //If second last question is reached, hide "nextQuestion" button display "endQuiz" button
        
    } else {
    //Update question

    updateQuestion();

    // Disable "nextQuestion" button
    disableNextQuestion();
    
    // Enable option buttons
    enableOptionButtons();

    // Reset feedback
    resetFeedback();
    
    // Reset colour of buttons
    resetColorButtons();
    }
}






