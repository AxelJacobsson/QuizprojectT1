// Import HTML elements
let submitName = document.getElementById('submit');
let startQuizButton = document.getElementById('start-quiz');
let userNameInput = document.getElementById('type-name');

let question = document.getElementById('question');
let checkAnswer = document.getElementsByClassName('option-buttons');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let feedback = document.getElementById('feedback');
let showCorrectAnswer = document.getElementById('showCorrectAnswer');
let nextQuestionButton = document.getElementById('nextQuestion');
let viewResultButton = document.getElementById('endQuiz');

let currentQuestion = document.getElementById('currentQuestion');
let highScore = document.getElementById('highScore');
let totalQuestions = document.getElementById('totalQuestions');
let userScore = document.getElementById('score');
let userName = document.getElementById('user-name');
let quizLength = document.getElementById('quiz-length');
let progress = document.getElementById('progress');

let resultText = document.getElementById('result-text');
let readMoreButton = document.getElementById('read-more');



//1. Shuffle questions in each new quiz

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
  };


// 2. LOCAL STORAGE for users

//Get user from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('activeUser'))
};

//Save user to localStorage
function saveUser(user) {
    return localStorage.setItem('activeUser', JSON.stringify(user))
};


// 3. WELCOME FLOW

// Initiates the user welcome flow where it reads the username and saves it to local storage
const welcomeFlow = function() {
    //const users = getUsers() // What does this do??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    //When clicking submit, a new user is created and stored to localStorage
    submitName.addEventListener('click', (e) => {  // there seems to be a problem here. 'e' is never called?
        const tempUserName = userNameInput.value
   
        if(tempUserName.length === 0) {
            return false
        }

        // New user is created from User Class
        const user = new User(tempUserName, 0, null)

        // New user is saved to local storage
        localStorage.setItem('activeUser', JSON.stringify(user))

        // User is directed to next page
        location.assign('instructions.html')
    })
};


// 4. INSTRUCTIONS FLOW

function instructionsFlow() {
    userName.innerText = activeUser.firstname // Show user name
    startQuiz() // Redirect user to quiz when start button is clicked
};

function startQuiz() {
    startQuizButton.addEventListener('click', (e) => {
        // User is directed to quiz
        location.assign('quiz.html')
    })
};


// 5. QUIZ GAME FLOW

function updateUI() {
    giveFeedback() // Provides feedback to the user
    pressNext() // Initialises new question
    updateQuestion(); // Shows the first question of the quiz (index 0)
}

let categoryFails = {} //the object that stores the fails for the category
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
                    activeUser.failedCategory = categoryFails //Store "categoryFails" to activeUser (local storage), since a the "results.html" loads as a new html
                    saveUser(activeUser) // Save activeUser to local storage  
                } else {
                    // User feedback
                    // Need to give it a value
                    if (!categoryFails[assessmentQuiz[questionNumber].category]) {
                        categoryFails[assessmentQuiz[questionNumber].category] = 0   
                    }

                    categoryFails[assessmentQuiz[questionNumber].category]++;

                    feedback.innerHTML = 'Incorrect!';
                    showCorrectAnswer.innerHTML = `The correct answer is '${assessmentQuiz[questionNumber].answer}'`
                    element.style.backgroundColor = "rgb(178, 21, 24)";
                    element.style.color = "white";
                };
                resetButtonsNewQuestion(); // Resets all buttons for next question   
        };
    }
};

function pressNext() {
    // When pressing 'next' button
    nextQuestion.onclick = function (){
        questionNumber++; //Increment question number by 1
        if(questionNumber === assessmentQuiz.length - 1) {
            resetUI(); // Updates question, and resets buttons and feedback
            displayViewResultsButton(); // Display 'View Results' button on last question
        } else {
            resetUI(); // Updates question, and resets buttons and feedback
        }
    }
};

function resetUI() {
    // Update question
    updateQuestion();
    // Reset feedback
    resetFeedback();
    // Enable option buttons
    enableOptionButtons();
    // Reset colour of buttons
    resetColorButtons();
}

function updateQuestion() {
    question.innerHTML = assessmentQuiz[questionNumber].question;
    option1.innerHTML = assessmentQuiz[questionNumber].options[0];
    option2.innerHTML = assessmentQuiz[questionNumber].options[1];
    option3.innerHTML = assessmentQuiz[questionNumber].options[2];
    updateProgress(questionNumber, assessmentQuiz.length)
    nextQuestion.disabled = true; // 'Next' button is disabled
    endQuiz.disabled = true; // 'View results' button is disabled
};

function resetFeedback() { // Feedback is reset
    feedback.innerHTML = "";
    showCorrectAnswer.innerHTML = "";
};

function enableOptionButtons() { // Option buttons are enabled
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
};

function resetColorButtons() { // Colour of buttons is reset
    option1.style.backgroundColor = "";
    option2.style.backgroundColor = "";
    option3.style.backgroundColor = "";
    option1.style.color = "";
    option2.style.color = "";
    option3.style.color = "";
};

function resetButtonsNewQuestion() { // Enable / disable buttons whenever new question is initialised
    endQuiz.disabled = false;
    nextQuestion.disabled = false; 
    option1.disabled = true;
    option2.disabled = true; 
    option3.disabled = true; 
};

function displayViewResultsButton() { // Show 'View results' (also called 'endQuiz') button and hide 'Next' button on final question
    viewResultButton.style.display = "block";
    nextQuestionButton.style.display= "none"; 
};


// 6. PROGRESS

function updateProgress(currentQuestion,totalQuestions) {
    progress.innerText = `${currentQuestion + 1} / ${totalQuestions}`
};


// 7. RESULTS FLOW

function showResults() {
    userScore.innerText = activeUser.score
    quizLength.innerText = assessmentQuiz.length
    
    let category;
    let maxFails = 0;
    for (let checkCategory of Object.keys(activeUser.failedCategory)) { // Get the keys from the object
         if (activeUser.failedCategory[checkCategory] > maxFails) {
            category = checkCategory; // The category with the highest number of fails is stored to "category"
            maxFails = activeUser.failedCategory[checkCategory] // Store the highest numbers of fails so far
            resultText.innerHTML = `Well done ${activeUser.firstname}! Based on your answers, it looks like you need to study ${category}.`;
        }
    }
    allAnswersCorrect();      
    allAnswersIncorrect();
    updateLink();

    function allAnswersCorrect() {
        if (activeUser.score == assessmentQuiz.length) {
            resultText.innerHTML = `Well done ${activeUser.firstname}! You answered all questions correctly!`;
        }
    };

    function allAnswersIncorrect() {
        if (activeUser.score == 0) {
            resultText.innerHTML = `Better luck next time, ${activeUser.firstname}. Let's try again.`;
        }
    };

    function updateLink() { // We should probably change this to a switch statement (better for speed and readability)
        if (category == 'Conditionals') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/02_program_structure.html' target='_blank'>Read about<br>Conditionals</a>";
        } else if (category == 'Functions') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/03_functions.html' target='_blank'>Read about<br>Functions</a>";
        } else if (category == 'Scope') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/03_functions.html' target='_blank'>Read about<br>Scope</a>";
        } else if (category == 'Arrays') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/04_data.html' target='_blank'>Read about<br>Arrays</a>";
        } else if (category == 'Loops') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/02_program_structure.html' target='_blank'>Read about<br>Loops</a>";
        } else if (category == 'Iterators') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/06_object.html' target='_blank'>Read about<br>Iterators</a>";
        } else if (category == 'Objects') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/06_object.html' target='_blank'>Read about<br>Objects</a>";
        } else if (category == 'Classes') {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/06_object.html' target='_blank'>Read about<br>Classes</a>";
        } else {
            readMoreButton.innerHTML = "<a href='https://eloquentjavascript.net/' target='_blank'>Read<br>more</a>";
        }
    };
};