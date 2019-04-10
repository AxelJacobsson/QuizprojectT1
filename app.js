//  APP Game Controller
let activeUser = getUsers();

if(location.href.includes('welcome-message.html')) {
    console.log('Currently on the welcome screen')













} else if (location.href.includes('what-is-your-name.html')) {
    console.log('Currently on the name page')

    welcomeFlow()









} else if (location.href.includes('instructions.html')) {

    activeUser = getUsers();
    document.getElementById('user-name').innerText = activeUser.firstname





} else if (location.href.includes('quiz.html')) {

    // is there a user in localstorage? If not, redirect to welcome screen

    if (getUsers() == null) {location.assign('welcome-message.html')}


    //Import HTML elements
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var feedback = document.getElementById('feedback');
var highScore = document.getElementById('highScore');
var nextQuestion = document.getElementById('nextQuestion');
var endQuiz = document.getElementById('endQuiz');
var totalQuestions = document.getElementById('totalQuestions')

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
                //highScore.innerHTML = "Highscore: " + score; //High score is displayed
                feedback.innerHTML = "Correct!";
                element.style.backgroundColor = "rgb(11, 145, 31)";
                element.style.color = "white";
                console.log(allQuestions[questionNumber].answer);
                console.log(response);
                console.log(score);
                
              activeUser.score = score
              saveUser(activeUser)
              //Save my activeUser back to localStorage

            } else {
                feedback.innerHTML = "Incorrect!";
                element.style.backgroundColor = "rgb(178, 21, 24)";
                element.style.color = "white";
                console.log(allQuestions[questionNumber].answer);
                console.log(response);
                // Change the color of the correct question to green, so that user knows which question is correct
                // HOW???

            };
            resetButtonsNewQuestion();
            
    };
}














    
} else if (location.href.includes('results.html')) {

     // is there a user in localstorage? If not, redirect to welcome screen

     if (getUsers() == null) {location.assign('welcome-message.html')}

};