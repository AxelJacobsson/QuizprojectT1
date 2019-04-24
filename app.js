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

// Create new array with only 16 questions
const assessmentQuiz = allQuestions.slice(0, 6);

//  APP Game Controller
let activeUser = getUsers(); // What does this do exactly?

// Run welcome flow if user is on index.html
if (location.href.includes('index.html')) {
    welcomeFlow()
}

// Get name from local storage and display on instructions page and start quiz
else if (location.href.includes('instructions.html')) {
    document.getElementById('user-name').innerText = activeUser.firstname  
    startQuiz() // Redirect user to quiz when start button is clicked
}

else if (location.href.includes('quiz.html')) {
    // Check if there is a user in localstorage. If not, redirect to welcome screen (This does not seem to work???????????????????????????????????????????????
    if (getUsers() == null) {
        location.assign('index.html')
    } else {
        document.getElementById('quiz-length').innerText = assessmentQuiz.length
        document.getElementById('currentQuestion').innerText = currentQuestion; // Something is wrong here????????????????????????????????????????????????????
    }
}

else if (location.href.includes('results.html')) {
    document.getElementById('score').innerText = activeUser.score
    document.getElementById('quiz-length').innerText = assessmentQuiz.length
    document.getElementById('user-name').innerText = activeUser.firstname
}

// Set question number to 0
let questionNumber = 0;
updateQuestion(); // Shows the first question of the quiz (index 0)

//When the first question is launched "nextQuestion" button is disabled 
nextQuestion.disabled = true;

//When pressing one of the options buttons


//When pressing "nextQuestion" button
nextQuestion.onclick = function (){
    questionNumber++; //Increment question number by 1
    currentQuestion++; //WHY DOES THIS NOT WORK!!!!!!!????????????????!!!!!??????????????????????????????????
    
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

//Score variable
let score = 0;
for (const element of checkAnswer){
    element.onclick = function (event) {
            let response = event.target.innerHTML;
            if(response == assessmentQuiz[questionNumber].answer){ //When options are selected, loop checks if correct answer
                score++; //Increment score by 1
                // User feedback
                feedback.innerHTML = "Correct!";
                element.style.backgroundColor = 'rgb(11, 85, 221)';
                element.style.color = "white";
                userScore.innerHTML = `Score: ${score}`;
                activeUser.score = score // Save score to activeUser
                saveUser(activeUser) // Save activeUser to localStorage  
            } else {
                // User feedback
                feedback.innerHTML = 'Incorrect!';
                showCorrectAnswer.innerHTML = `The correct answer is '${assessmentQuiz[questionNumber].answer}'`
                element.style.backgroundColor = "rgb(178, 21, 24)";
                element.style.color = "white";
                //highlightCorrectAnswer()
            };
            resetButtonsNewQuestion(); // Resets all buttons for next question   
    };
}