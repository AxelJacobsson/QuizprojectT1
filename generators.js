//Generating a question

const question1 = new QuestionGen('Conditionals', 'If isHungry equals true, which of the following expressions evaluates to true?', ['isHungry !== false', '!isHungry === true', 'isHungry === false'], 'isHungry !== false');
const question2 = new QuestionGen('Conditionals', 'What is the general purpose of a conditional statement?', ['Conditional statements answer binary (yes-or-no) questions.', 'Conditional statements evaluate code as either true or false.', 'Conditional statements make all computers capable of thought.'], 'Conditional statements evaluate code as either true or false.');


//Array for all questions

const allQuestions = [question1, question2];


//Import HTML elements
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');


//Incrementing the question number when pressing "Next Question" button
var questionNumber = 0;

updateQuestion();

function updateQuestion() {
    question.innerHTML = allQuestions[questionNumber].question;
    option1.innerHTML = allQuestions[questionNumber].options[0];
    option2.innerHTML = allQuestions[questionNumber].options[1];
    option3.innerHTML = allQuestions[questionNumber].options[2];
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

/*
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

*/

//Generating a quiz

 