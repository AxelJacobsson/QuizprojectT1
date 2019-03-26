//Generating a question

const question1 = new QuestionGen('Conditionals', 'What is a function?', 'xxx', 'zzz', 'correct');
const question2 = new QuestionGen('Conditionals', 'What is an array?', 'xxx', 'zzz', 'correct');
const question3 = new QuestionGen('Conditionals', 'What is an array?', 'xxx', 'zzz', 'correct');
const question4 = new QuestionGen('Functions', 'What is an array?', 'xxx', 'zzz', 'correct');
const question5 = new QuestionGen('Functions', 'What is an array?', 'xxx', 'zzz', 'correct');
const question6 = new QuestionGen('Functions', 'What is an array?', 'xxx', 'zzz', 'correct');
const question7 = new QuestionGen('Scope', 'What is an array?', 'xxx', 'zzz', 'correct');
const question8 = new QuestionGen('Scope', 'What is an array?', 'xxx', 'zzz', 'correct');
const question9 = new QuestionGen('Scope', 'What is an array?', 'xxx', 'zzz', 'correct');
const question10 = new QuestionGen('Arrays', 'What is an array?', 'xxx', 'zzz', 'correct');
const question11 = new QuestionGen('Arrays', 'What is an array?', 'xxx', 'zzz', 'correct');
const question12 = new QuestionGen('Arrays', 'What is an array?', 'xxx', 'zzz', 'correct');
const question13 = new QuestionGen('Loops', 'What is an array?', 'xxx', 'zzz', 'correct');
const question14 = new QuestionGen('Loops', 'What is an array?', 'xxx', 'zzz', 'correct');
const question15 = new QuestionGen('Loops', 'What is an array?', 'xxx', 'zzz', 'correct');
const question16 = new QuestionGen('Iterators', 'What is an array?', 'xxx', 'zzz', 'correct');
const question17 = new QuestionGen('Iterators', 'What is an array?', 'xxx', 'zzz', 'correct');
const question18 = new QuestionGen('Iterators', 'What is an array?', 'xxx', 'zzz', 'correct');
const question19 = new QuestionGen('Objects', 'What is an array?', 'xxx', 'zzz', 'correct');
const question20 = new QuestionGen('Objects', 'What is an array?', 'xxx', 'zzz', 'correct');
const question21 = new QuestionGen('Objects', 'What is an array?', 'xxx', 'zzz', 'correct');
const question22 = new QuestionGen('Classes', 'What is an array?', 'xxx', 'zzz', 'correct');
const question23 = new QuestionGen('Classes', 'What is an array?', 'xxx', 'zzz', 'correct');
const question24 = new QuestionGen('Classes', 'What is an array?', 'xxx', 'zzz', 'correct');

//Array for all questions

const allQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9];


//Question variable linked to html
var question = document.getElementById('question');

var wrong1 = document.getElementById('wrong1');
var wrong2 = document.getElementById('wrong2');
var correct = document.getElementById('correct');


//Incrementing the question number when pressing "Next Question" button
var questionNumber = 0;

function updateQuestion() {
    this.questionNumber++;
    question.innerHTML = allQuestions[questionNumber].question;
    wrong1.innerHTML = allQuestions[questionNumber].wrong1;
    wrong2.innerHTML = allQuestions[questionNumber].wrong2;
    correct.innerHTML = allQuestions[questionNumber].correct;
}

//Call function 
updateQuestion();


//Increment question number when "nextQuestion" button is clicked
nextQuestion.onclick = function(){
    this.questionNumber++;
};





//Score variable

let score = 0;

//Keep track of the score
alert("you got" + score + "/" + question.length);


//Function for the multiple choice buttons
//Loop array & alert if the answers are correct or not
let checkAnswer = document.getElementsByClassName('btn-group');

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







//Generating a quiz