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

    const user = new User(tempUserName)
    console.log(user)

  
    localStorage.setItem('activeUser', JSON.stringify(user))
    console.log('user saved to localStorage')

    //user is directed instructions page
    location.assign('instructions.html')
  })
}


const startQuiz = function() {
    document.getElementById('start-quiz').addEventListener('click', (e) => {
       
        //user is directed to quiz
        location.assign('quiz.html')
      })
}


//SECTION - QUIZ

function updateQuestion() {
    question.innerHTML = assessmentQuiz[questionNumber].question;
    option1.innerHTML = assessmentQuiz[questionNumber].options[0];
    option2.innerHTML = assessmentQuiz[questionNumber].options[1];
    option3.innerHTML = assessmentQuiz[questionNumber].options[2];
    currentQuestion++;
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

//Shuffle questions

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
