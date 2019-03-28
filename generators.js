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


//Incrementing the question number when pressing "Next Question" button
var questionNumber = 0;

updateQuestion();

function updateQuestion() {
    question.innerHTML = allQuestions[questionNumber].question;
    option1.innerHTML = allQuestions[questionNumber].options[0];
    option2.innerHTML = allQuestions[questionNumber].options[1];
    option3.innerHTML = allQuestions[questionNumber].options[2];
}

//Function for iniating the end quiz page

function quizEnded () {

};

//When "nextQuestion" button is clicked increment question number

var nextQuestion = document.getElementById('nextQuestion');

nextQuestion.onclick = function (){
    if(questionNumber === allQuestions.length - 1) {
        questionNumber++;
        console.log(questionNumber);
        updateQuestion();
        document.getElementById('endQuiz').innerHTML.style.display = "block";
        document.getElementById('nextQuestion').innerHTML.style.display= "none";
    } else {
    questionNumber++;
    console.log(questionNumber);
    //Call function 
    updateQuestion();
    }
};


//Score variable
let score = 0;

//Loop the array of questions & display if the answers are correct or not

let checkAnswer = document.getElementsByClassName('option-buttons');
console.log(checkAnswer)
for (const element of checkAnswer){
    element.onclick = function (event) {
        console.log(event.target);
            var response = event.target.innerHTML; //Response should equal the choices
            if(response == allQuestions[questionNumber].answer){
                score++;
                Highscore.innerHTML = "Highscore: " + score;
                feedback.innerHTML = "Correct!";
            } else {
                feedback.innerHTML = "Incorrect!";
            }
        
    
    };
}

//Display the users score on the result page
document.getElementsById('userscore').innerHTML = score;
 

//When a quiz is started, in a function: a sort method that returns a new array, which is limited to 10 questions
//The function should reshuffle the questions and your answers