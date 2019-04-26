//Get user from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('activeUser'))
};

//Save user to localStorage
function saveUser(user) {
    return localStorage.setItem('activeUser', JSON.stringify(user))
};

// Initiates the user welcome flow where it reads the username and saves it to localStorage
const welcomeFlow = function() {
    const users = getUsers()
    //When clicking submit, a new user is created and stored to localStorage
    document.getElementById('submit').addEventListener('click', (e) => {
        const tempUserName = document.getElementById('type-name').value
   
        if(tempUserName.length === 0) {
            return false
        }

        // New user is created from our User Class
        const user = new User(tempUserName)

        // New user is saved to local storage
        localStorage.setItem('activeUser', JSON.stringify(user))

        // User is directed to next page
        location.assign('instructions.html')
    })
};

// Instructions flow

function instructionsFlow() {
    document.getElementById('user-name').innerText = activeUser.firstname // Show user name
    startQuiz() // Redirect user to quiz when start button is clicked
};

const startQuiz = function() {
    document.getElementById('start-quiz').addEventListener('click', (e) => {
        // User is directed to quiz
        location.assign('quiz.html')
    })
};


// SECTION - QUIZ

function updateQuestion() {
    question.innerHTML = assessmentQuiz[questionNumber].question;
    option1.innerHTML = assessmentQuiz[questionNumber].options[0];
    option2.innerHTML = assessmentQuiz[questionNumber].options[1];
    option3.innerHTML = assessmentQuiz[questionNumber].options[2];
    updateProgress(questionNumber, assessmentQuiz.length)
};


function disableNextQuestion() {
    nextQuestion.disabled = true; //When function is run, "nextQuestion" button and "endQuiz" button are disabled
    endQuiz.disabled = true;

};


function enableOptionButtons() {
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
};

function resetFeedback() {
    feedback.innerHTML = "";
    showCorrectAnswer.innerHTML = "";
};


function resetColorButtons() {
    option1.style.backgroundColor = "";
    option2.style.backgroundColor = "";
    option3.style.backgroundColor = "";
    
    option1.style.color = "";
    option2.style.color = "";
    option3.style.color = "";

    option1.style.borderWidth = "";
    option2.style.borderWidth = "";
    option3.style.borderWidth = "";

    option1.style.borderColor = "";
    option2.style.borderColor = "";
    option3.style.borderColor = "";
};


function resetButtonsNewQuestion() {
    endQuiz.disabled = false; //When clicked, function is run, "nextQuestion" button and "endQuiz" button are enabled
    nextQuestion.disabled = false; 
    option1.disabled = true; //When clicked, function is run, option buttons are disabled
    option2.disabled = true; 
    option3.disabled = true; 

};

/*
function highlightCorrectAnswer() {
    const answer = document.querySelectorAll('.option-buttons')
    for (let i = 0; i < answer.length; i++) {
        if(answer[i].innerHTML == assessmentQuiz[i].answer) {
            answer[i].style.borderWidth = "5px"
            answer[i].style.borderColor = "rgb(11, 85, 221)"
        }
    }
};
*/

function showResults() {
    document.getElementById('score').innerText = activeUser.score
    document.getElementById('quiz-length').innerText = assessmentQuiz.length
    document.getElementById('user-name').innerText = activeUser.firstname
}

function giveFeedback() {
    for (const element of checkAnswer){
        element.onclick = function (event) {
                let response = event.target.innerHTML;
                if(response == assessmentQuiz[questionNumber].answer){ //When options are selected, loop checks if correct answer
                    score++; //Increment score by 1
                    // User feedback
                    feedback.innerHTML = "Correct!";
                    element.style.backgroundColor = 'rgb(11, 85, 221)';
                    element.style.color = "white";
                    userScore.innerHTML = `Score: ${score}`;
                    activeUser.score = score // Save score to activeUser
                    saveUser(activeUser) // Save activeUser to localStorage  
                } else {
                    // User feedback
                    feedback.innerHTML = 'Incorrect!';
                    showCorrectAnswer.innerHTML = `The correct answer is '${assessmentQuiz[questionNumber].answer}'`
                    element.style.backgroundColor = "rgb(178, 21, 24)";
                    element.style.color = "white";
                    //highlightCorrectAnswer()
                };
                resetButtonsNewQuestion(); // Resets all buttons for next question   
        };
    }
};

//Shuffle questions for every quiz

function shuffle(allQuestions) {
    var currentIndex = allQuestions.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        temporaryValue = allQuestions[currentIndex];
        allQuestions[currentIndex] = allQuestions[randomIndex];
        allQuestions[randomIndex] = temporaryValue;
    }
    return allQuestions;
  }

function updateProgress(currentQuestion,totalQuestions) {
    document.getElementById('progress').innerText = `${currentQuestion + 1} / ${totalQuestions}`
}


function updateUI(index, data) {
    updateQuestion(index, data)
    updateProgress(index, data.length)
    updateScore()
}