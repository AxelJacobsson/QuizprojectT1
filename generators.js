//Generating a question

const question1 = new QuestionGen('Conditionals', 'If isHungry equals true, which of the following expressions evaluates to true?', ['isHungry !== false', '!isHungry === true', 'isHungry === false'], 'isHungry !== false');
const question2 = new QuestionGen('Conditionals', 'What is the general purpose of a conditional statement?', ['Conditional statements answer binary (yes-or-no) questions.', 'Conditional statements evaluate code as either true or false.', 'Conditional statements make all computers capable of thought.'], 'Conditional statements evaluate code as either true or false.');
const question3 = new QuestionGen('Conditionals', 'XXXXXXXXXXXXXX?', ['Conditional statements answer binary (yes-or-no) questions.', 'Conditional statements evaluate code as either true or false.', 'Conditional statements make all computers capable of thought.'], 'Conditional statements evaluate code as either true or false.');


//Array for all questions

const allQuestions = [question1, question2, question3];


//Import HTML elements
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var feedback = document.getElementById('feedback');
var highScore = document.getElementById('highScore');
var nextQuestion = document.getElementById('nextQuestion');
var endQuiz = document.getElementById('endQuiz');


//Incrementing the question number when pressing "Next Question" button
var questionNumber = 0;

updateQuestion();

function updateQuestion() {
    question.innerHTML = allQuestions[questionNumber].question;
    option1.innerHTML = allQuestions[questionNumber].options[0];
    option2.innerHTML = allQuestions[questionNumber].options[1];
    option3.innerHTML = allQuestions[questionNumber].options[2];
};


//When the first question is launched "nextQuestion" button is disabled 
nextQuestion.disabled = true;



//When pressing "nextQuestion" button
nextQuestion.onclick = function (){
    questionNumber++; //Increment question number by one
    
    if(questionNumber === allQuestions.length - 1) {
        updateQuestion();
        console.log(questionNumber);
        document.getElementById('endQuiz').style.display = "block";
        document.getElementById('nextQuestion').style.display= "none"; //If second last question is reached, hide "nextQuestion" button display "endQuiz" button
        
    } else {
    console.log(questionNumber);
    //Call function 
    updateQuestion();
    }
    nextQuestion.disabled = true; //Always when next question is launched, "nextQuestion" button and "endQuiz" button are disabled
    endQuiz.disabled = true;
};

//Score variable
let score = 0;

//When pressing one of the options buttons
let checkAnswer = document.getElementsByClassName('option-buttons');

for (const element of checkAnswer){
    element.onclick = function (event) {
        
            var response = event.target.innerHTML;
            if(response == allQuestions[questionNumber].answer){ //When options are selected, loop checks if correct answer
                score++; //Increment score by 1
                highScore.innerHTML = "Highscore: " + score; //High score is displayed
                feedback.innerHTML = "Correct!";
            } else {
                feedback.innerHTML = "Incorrect!";
            };
            endQuiz.disabled = false; //Always when selecting option, "nextQuestion" button and "endQuiz" button are enabled
            nextQuestion.disabled = false;
            
    };
}

//Display the users score on the result page
//document.getElementsById('userscore').innerHTML = score;
 

//When a quiz is started, in a function: a sort method that returns a new array, which is limited to 10 questions
//The function should reshuffle the questions and your answers