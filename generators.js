//Generating a question

const question1 = new QuestionGen('Conditionals', 'If isHungry equals true, which of the following expressions evaluates to true?', ['isHungry !== false', '!isHungry === true', 'isHungry === false'], 'isHungry !== false');
const question2 = new QuestionGen('Conditionals', 'What is the general purpose of a conditional statement?', ['Conditional statements answer binary (yes-or-no) questions.', 'Conditional statements evaluate code as either true or false.', 'Conditional statements make all computers capable of thought.'], 'Conditional statements evaluate code as either true or false.');
const question3 = new QuestionGen('Conditionals', 'Which of the following variables contains a truthy value?', ['let varTwo = false;', 'let varFour = '';', 'let varOne = 'false';'], 'let varOne = 'false';');


//Array for all questions

const allQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9];


//Question variable linked to html
var question = document.getElementById('question');

var wrong1 = document.getElementById('wrong1');
var wrong2 = document.getElementById('wrong2');
var correct = document.getElementById('correct');


//Incrementing the question number when pressing "Next Question" button
var questionNumber = 0;

updateQuestion()

function updateQuestion() {
    //questionNumber++;
    question.innerHTML = allQuestions[questionNumber].question;
    wrong1.innerHTML = allQuestions[questionNumber].wrong1;
    wrong2.innerHTML = allQuestions[questionNumber].wrong2;
    correct.innerHTML = allQuestions[questionNumber].correct;
}


//When "nextQuestion" button is clicked increment question number

var nextQuestion = document.getElementById('nextQuestion')

nextQuestion.onclick = function (){
    questionNumber++;
    console.log(questionNumber)
    //Call function 
    updateQuestion();
};



//When a quiz is started, in a function: a sort method that returns a new array, which is limited to 10 questions
//The function should reshuffle the questions and your answers




//Score variable

let score = 0;

//Function for the multiple choice buttons
//Loop array & alert if the answers are correct or not
let checkAnswer = document.getElementsByClassName('nextQuestion');

checkAnswer.onclick = function () {
    for(var i=0; i < allQuestions.length; i ++){
        var response = window.prompt(allQuestions[i.prompt]);
        if(response == allQuestions[i].correct){
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!")
        }
    }

}

//Keep track of the score
alert("you got" + score + "/" + question.length);



//Generating a quiz

 