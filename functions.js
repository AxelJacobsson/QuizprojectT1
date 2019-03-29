function runQuiz() {
    if(quiz.isEnded()){
        //showScores();
    } else {
        //show questions
    }
}


var quiz = new Quiz(questions);








//Score variable
let score = 0;


//When an option is selected, enable the "nextQuestion" button
nextQuestion.disabled = true;


let checkAnswer = document.getElementsByClassName('option-buttons'); // import HTML option buttons
console.log(checkAnswer) // why do we need to console log this?
for (const element of checkAnswer){ // for loop
    element.onclick = function (event) { // run this function when any option button is clicked
        
        console.log(event.target); // why do we need to console log this?
            var response = event.target.innerHTML; // save user response to variable called response
            if(response == allQuestions[questionNumber].answer){ // check is user choice is correct
                score++; // increment user score by 1 if answer is correct
                highScore.innerHTML = "Highscore: " + score; // print the current user score
                feedback.innerHTML = "Correct!"; // feedback to user 
            } else {
                feedback.innerHTML = "Incorrect!"; // feedback to user 
            };
            endQuiz.disabled = false;
            nextQuestion.disabled = false;
    };
}