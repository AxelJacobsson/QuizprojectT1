//  APP Game Controller
let activeUser = getUsers();

if (location.href.includes('index.html')) {
    console.log('Currently on the name page')

    welcomeFlow()

}


else if (location.href.includes('instructions.html')) {

    //activeUser = getUsers();
    document.getElementById('user-name').innerText = activeUser.firstname
    
    startQuiz()

}


else if (location.href.includes('quiz.html')) {

    // is there a user in localstorage? If not, redirect to welcome screen

    if (getUsers() == null) {
        location.assign('welcome-message.html')
    }
    
}


if (location.href.includes('results.html')) {

    document.getElementById('score').innerText = activeUser.score
    document.getElementById('quiz-length').innerText = allQuestions.length
    document.getElementById('user-name').innerText = activeUser.firstname

}





//Import HTML elements
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var feedback = document.getElementById('feedback');
var showCorrectAnswer = document.getElementById('showCorrectAnswer');
var highScore = document.getElementById('highScore');
var nextQuestion = document.getElementById('nextQuestion');
var endQuiz = document.getElementById('endQuiz');
var totalQuestions = document.getElementById('totalQuestions');
var userScore = document.getElementById('score');
var progress = document.getElementById('progress');


// Set question number to 0
var questionNumber = 0;
updateQuestion();


//When the first question is launched "nextQuestion" button is disabled 
nextQuestion.disabled = true;

//When pressing one of the options buttons
let checkAnswer = document.getElementsByClassName('option-buttons');

//When pressing "nextQuestion" button
nextQuestion.onclick = function (){
    questionNumber++; //Increment question number by one
    
    if(questionNumber === allQuestions.length - 1) {
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

//When pressing one of the options buttons
//let checkAnswer = document.getElementsByClassName('option-buttons');
//element = 'option-buttons'

for (const element of checkAnswer){
    element.onclick = function (event) {
        
            var response = event.target.innerHTML;
            if(response == allQuestions[questionNumber].answer){ //When options are selected, loop checks if correct answer
                score++; //Increment score by 1
                feedback.innerHTML = "Correct!";
                element.style.backgroundColor = 'rgb(11, 85, 221)';
                element.style.color = "white";
                userScore.innerHTML = `Score: ${score}`;
                
              activeUser.score = score
              saveUser(activeUser)
              //Save my activeUser back to localStorage

            } else {
                feedback.innerHTML = 'Incorrect!' ;
                showCorrectAnswer.innerHTML = `The correct answer is '${allQuestions[questionNumber].answer}'`
                element.style.backgroundColor = "rgb(178, 21, 24)";
                element.style.color = "white";
                
                // This doesn't work
                //allQuestions[questionNumber].answer.style.backgroundColor = "red";
                
                // Trying with a function
                highlightCorrectAnswer()
            };
            
            resetButtonsNewQuestion();       
    };
}






    
// } else if (location.href.includes('results.html')) {

//      // is there a user in localstorage? If not, redirect to welcome screen

//      if (getUsers() == null) {location.assign('welcome-message.html')}

// };


console.log("Current score: " + activeUser.score);
console.log("Current score: " + activeUser.firstname);