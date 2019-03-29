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


//Incrementing the question number when pressing "Next Question" button
var questionNumber = 0;

updateQuestion();

function updateQuestion() {
    question.innerHTML = allQuestions[questionNumber].question;
    option1.innerHTML = allQuestions[questionNumber].options[0];
    option2.innerHTML = allQuestions[questionNumber].options[1];
    option3.innerHTML = allQuestions[questionNumber].options[2];
};






//When "nextQuestion" button is clicked increment question number by one
//Also, re-define the "nextQuestion button" with "endQuiz button" if the "last question - 1" is reached

var nextQuestion = document.getElementById('nextQuestion');
var endQuiz = document.getElementById('endQuiz');


nextQuestion.onclick = function (){
    questionNumber++;
    
    if(questionNumber === allQuestions.length - 1) {
        updateQuestion();
        console.log(questionNumber);
        document.getElementById('endQuiz').style.display = "block";
        document.getElementById('nextQuestion').style.display= "none";
        
    } else {
    console.log(questionNumber);
    //Call function 
    updateQuestion();
    }
    nextQuestion.disabled = true;
    endQuiz.disabled = true;
};

// nextQuestion.onclick = function (){
//     questionNumber++;
    
//     if(questionNumber === allQuestions.length - 1) {
//         console.log(questionNumber);
//         updateQuestion();
//         document.getElementById('endQuiz').innerHTML.style.display = "block";
//         document.getElementById('nextQuestion').innerHTML.style.display= "none";
//     } else {
//     console.log(questionNumber);
//     //Call function 
//     updateQuestion();
//     }
//     nextQuestion.disabled = true;
// };




//Score variable
let score = 0;



//When an option is selected, enable the "nextQuestion" button

nextQuestion.disabled = true;
// endQuiz.disabled = true;

//Loop the array of questions & display if the answers are correct or not

let checkAnswer = document.getElementsByClassName('option-buttons');
console.log(checkAnswer)
for (const element of checkAnswer){
    element.onclick = function (event) {
        
        console.log(event.target);
            var response = event.target.innerHTML; //Response should equal the choices
            if(response == allQuestions[questionNumber].answer){
                score++;
                highScore.innerHTML = "Highscore: " + score;
                feedback.innerHTML = "Correct!";
            } else {
                feedback.innerHTML = "Incorrect!";
            };
            endQuiz.disabled = false;
            nextQuestion.disabled = false;
            
    console.log("end quiz")
    };
}

//Display the users score on the result page
//document.getElementsById('userscore').innerHTML = score;
 

//When a quiz is started, in a function: a sort method that returns a new array, which is limited to 10 questions
//The function should reshuffle the questions and your answers