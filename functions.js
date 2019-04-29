//1. Shuffle questions for every quiz

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

// Initiates the user welcome flow where it reads the username and saves it to localStorage
const welcomeFlow = function() {
    const users = getUsers()
    //When clicking submit, a new user is created and stored to localStorage
    document.getElementById('submit').addEventListener('click', (e) => {  // there seems to be a problem here. 'e' is never called?
        const tempUserName = document.getElementById('type-name').value
   
        if(tempUserName.length === 0) {
            return false
        }

        // New user is created from our User Class
        const user = new User(tempUserName, 0, null)

        // New user is saved to local storage
        localStorage.setItem('activeUser', JSON.stringify(user))

        // User is directed to next page
        location.assign('instructions.html')
    })
};

// 4. INSTRUCTIONS FLOW

function instructionsFlow() {
    document.getElementById('user-name').innerText = activeUser.firstname // Show user name
    startQuiz() // Redirect user to quiz when start button is clicked
};

function startQuiz() {
    document.getElementById('start-quiz').addEventListener('click', (e) => {
        // User is directed to quiz
        location.assign('quiz.html')
    })
};


// 5. QUIZ GAME

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
                    saveUser(activeUser) // Save activeUser to localStorage  
                } else {
                    // User feedback
                    //Need to give it a value
                    if (!categoryFails[assessmentQuiz[questionNumber].category]) {
                        categoryFails[assessmentQuiz[questionNumber].category] = 0   
                    }
                    categoryFails[assessmentQuiz[questionNumber].category]++;

                    console.log(categoryFails)

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

function pressNext() {
    //When pressing 'next' button
    nextQuestion.onclick = function (){
        questionNumber++; //Increment question number by 1
    
        if(questionNumber === assessmentQuiz.length - 1) {
            // Update question
            updateQuestion();
            // Reset feedback
            resetFeedback();
            // Enable option buttons
            enableOptionButtons();
            // Reset colour of buttons
            resetColorButtons();
            // Display 'View Results' button on last question
            displayViewResultsButton()
        } else {
            // Update question
            updateQuestion();
            // Reset feedback
            resetFeedback();
            // Enable option buttons
            enableOptionButtons();
            // Reset colour of buttons
            resetColorButtons();
        }
    }
};

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
    document.getElementById('endQuiz').style.display = "block";
    document.getElementById('nextQuestion').style.display= "none"; 
};


// 6. PROGRESS

function updateProgress(currentQuestion,totalQuestions) {
    document.getElementById('progress').innerText = `${currentQuestion + 1} / ${totalQuestions}`
};

// 7. RESULTS

function showResults() {
    document.getElementById('score').innerText = activeUser.score
    document.getElementById('quiz-length').innerText = assessmentQuiz.length
    document.getElementById('user-name').innerText = activeUser.firstname
 
    
    let category;
    let maxFails = 0;
    for (let checkCategory of Object.keys(activeUser.failedCategory)) { //getting the keys from the object
        console.log(checkCategory)
        if (activeUser.failedCategory[checkCategory] > maxFails) {
            category = checkCategory; //The category with the highest number of fails is stored to "category"
            maxFails = activeUser.failedCategory[checkCategory] //Store the highest numbers of fails so far
        }
    }

    document.getElementById('failedCategory').innerText = category
};

//What happens if all the answers are correct?? FIX!
