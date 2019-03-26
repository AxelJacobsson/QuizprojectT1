//Array for all questions

const allQuestions = [question1];

//Score variable

var score = 0;

//Keep track of the score
alert("you got" + score + "/" + question.length);


//Function for the buttons in the multiple choice 
//Loop Array & alert if the answers are correct or not

let checkAnswer = document.getElementsByClassName('btn-group');

checkAnswer.onclick = function () {
    for(var i=0; i < allQuestions.length; i ++){
        var response = window.prompt(allQuestions[i.prompt]);
        if(response == allQuestions[i].answers){
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!")
        }
    }

}
