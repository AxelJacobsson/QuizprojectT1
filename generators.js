//Array with all questions

const allQuestions = [
    // Category: Conditionals
    new QuestionGen('Conditionals', 'If isHungry equals true, which of the following expressions evaluates to true?', ['isHungry !== false', '!isHungry === true', 'isHungry === false'], 'isHungry !== false'),
    new QuestionGen('Conditionals', 'What is the general purpose of a conditional statement?', ['Conditional statements answer binary (yes-or-no) questions.', 'Conditional statements evaluate code as either true or false.', 'Conditional statements make all computers capable of thought.'], 'Conditional statements evaluate code as either true or false.'),
    new QuestionGen('Conditionals', 'Which of the following variables contains a truthy value?', ['let varThree = 0;', 'let varOne = "false";', 'let varFour = "";'], 'let varOne = "false";'),
    // Category: Functions
    new QuestionGen('Functions', 'What is wrong with the following code? const greeting = => {console.log("Hello Programmer!");};', ['The greeting function is missing a set of () between the = and =>.', 'The ordering of = and => should be switched.', 'The curly braces {} should be parentheses ().'], 'The greeting function is missing a set of () between the = and =>.'),
    new QuestionGen('Functions', 'Which correctly represents the most condensed form of the function? Recall that this syntax is also known as ‘concise body.’', ['const areaOfCircle = radius => return Math.PI * radius * radius;', 'const areaOfCircle = radius => { Math.PI * radius * radius };', 'const areaOfCircle = radius => Math.PI * radius * radius;'], 'const areaOfCircle = radius => Math.PI * radius * radius;'),
    new QuestionGen('Functions', 'What’s the purpose of a parameter?', ['To call a function.', 'To allow a function to accept data.', 'To specify actual values passed to a function.'], 'To allow a function to accept data.'),
    // Category: Scope
    new QuestionGen('Scope', 'What is a globally scoped variable?', ['A variable that is defined in a function.', 'A variable that is accessible to any part of the program.', 'A variable that is also a parameter.'], 'A variable that is accessible to any part of the program.'),
    new QuestionGen('Scope', 'Which best defines a variable with block scope?', ['A variable that is defined within a block and only available inside a block.', 'A variable that is available within a function.', 'A variable that is available outside of a block.'], 'A variable that is defined within a block and only available inside a block.'),
    new QuestionGen('Scope', 'What is preferable: defining variables in the global scope or defining variables in the block scope?', ['Defining variables in the global scope. Variables defined in the block scope are restrictive and often conflict with variables defined in the global scope.', 'Defining variables in the block scope. Variables defined in the global scope can cause unexpected behavior in our code.', 'Defining variables in the global scope and the block scope are equally preferable.'], 'Defining variables in the block scope. Variables defined in the global scope can cause unexpected behavior in our code.'),
    // Category: Arrays
    new QuestionGen('Arrays', 'How can you find how many elements are within an array?', ['myArray.findLength', 'myArray.length', 'length(myArray)'], 'myArray.length'),
    new QuestionGen('Arrays', 'Which of the methods below does NOT change the array it is called on?', ['.shift()', '.slice()', '.push()'], '.slice()'),
    new QuestionGen('Arrays', 'What is the purpose of an array?', ['To organize data at lettered positions.', 'To store data in an organized fashion.', 'To organize data into key-value pairs.'], 'To store data in an organized fashion.'),
    // Category: Loops
    new QuestionGen('Loops', 'You want to run a code block at least once, then loop as long as a condition remains true. Which kind of loop would you use?', ['A for statement', 'A do...while statement', 'A while statement'], 'A do...while statement'),
    new QuestionGen('Loops', 'What is the general purpose of a loop?', ['All loops help the computer make desicisions automatically.', 'Loops iterate through arrays to find elements.', 'Loops automatically iterate a block of code based on conditions.'], 'Loops automatically iterate a block of code based on conditions.'),
    new QuestionGen('Loops', 'What do nested for loops do?', ['Nested for loops allow us to run multiple for loops at once.', 'Nested for loops run the same code twice.', 'Nested for loops are bad because they run forever.'], 'Nested for loops allow us to run multiple for loops at once.'),
    // Category: Iterators
    new QuestionGen('Iterators', 'Which of the following methods returns a boolean value?', ['.some()', '.map()', '.filter()'], '.some()'),
    new QuestionGen('Iterators', 'Which of the following iterator methods returns undefined?', ['.map()', '.forEach()', '.filter()'], '.forEach()'),
    new QuestionGen('Iterators', 'Which of the following methods returns a new array?', ['.filter()', '.some()', '.every()'], '.filter()'),
    // Category: Objects
    new QuestionGen('Objects', 'Which of the following Object methods can be used to copy all of the properties of an object into a new object?', ['Object.entries()', 'myObject.hasOwnProperty()', 'Object.assign()'], 'Object.assign()'),
    new QuestionGen('Objects', 'What is a method?', ['A method is property with a function as its value.', 'A method is a general term used to describe how to create objects.', 'A method is a function that takes an object as its parameter.'], 'A method is property with a function as its value.'),
    new QuestionGen('Objects', 'What is a factory function?', ['A function that takes an object as an argument and then modifies it.', 'A function that returns an object.', 'A function that returns an array of objects.'], 'A function that returns an object.'),
    // Category: Classes
    new QuestionGen('Classes', 'Which of the following problems do classes alleviate?', ['Classes make it easy to create multiple objects that share property names, but not methods.', 'Classes make it easy to create multiple objects that share property names and methods.', 'Objects make it easy to create multiple classes that share properties and methods.'], 'Classes make it easy to create multiple objects that share property names and methods.'),
    new QuestionGen('Classes', 'What is the purpose of the super keyword?', ['The super keyword automatically create getters and setters for all properties.', 'The super keyword is used in subclasses to call a parent constructor().', 'The super keyword is called in a parent class to access the properties in all subclasses.'], 'The super keyword is used in subclasses to call a parent constructor().'),
    new QuestionGen('Classes', 'What is the purpose of the constructor() method?', ['Each property has a constructor() method. It is called whenever you try to set or get the property.', 'Subclasses inherit the constructor() from the parent class to set property values for the child class.', 'The constructor() is called when you create a new instance of a class. It sets the property values for each instance.'], 'The constructor() is called when you create a new instance of a class. It sets the property values for each instance.')
];

//Import HTML elements
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var feedback = document.getElementById('feedback');
var highScore = document.getElementById('highScore');
var nextQuestion = document.getElementById('nextQuestion');
var endQuiz = document.getElementById('endQuiz');
//var score = document.getElementById('score')
var totalQuestions = document.getElementById('totalQuestions')


//Incrementing the question number when pressing "Next Question" button
var questionNumber = 0;

updateQuestion();

function updateQuestion() {
    question.innerHTML = allQuestions[questionNumber].question;
    option1.innerHTML = allQuestions[questionNumber].options[0];
    option2.innerHTML = allQuestions[questionNumber].options[1];
    option3.innerHTML = allQuestions[questionNumber].options[2];
};


//When the first question is launched "nextQuestion" button is disabled 
nextQuestion.disabled = true;

//When pressing one of the options buttons
let checkAnswer = document.getElementsByClassName('option-buttons');
// checkAnswer.disabled = true;

//When pressing "nextQuestion" button
nextQuestion.onclick = function (){
    questionNumber++; //Increment question number by one
    
    if(questionNumber === allQuestions.length - 1) {
        updateQuestion();
        //console.log(questionNumber);
        document.getElementById('endQuiz').style.display = "block";
        document.getElementById('nextQuestion').style.display= "none"; //If second last question is reached, hide "nextQuestion" button display "endQuiz" button
        
    } else {
    //console.log(questionNumber);
    updateQuestion();
    }
    nextQuestion.disabled = true; //When function is run, "nextQuestion" button and "endQuiz" button are disabled
    endQuiz.disabled = true;
    option1.disabled = false; //When clicked, function is run, option buttons are enabled
    option2.disabled = false;
    option3.disabled = false;
    feedback.innerHTML = ""; //When clicked, function is run, "Correct/Incorrect" values are re-setted
};

//Score variable
let score = 0;

//When pressing one of the options buttons
//let checkAnswer = document.getElementsByClassName('option-buttons');
//element = 'option-buttons'

for (const element of checkAnswer){
    element.onclick = function (event) {
        
            var response = event.target.innerHTML;
            if(response == allQuestions[questionNumber].answer){ //When options are selected, loop checks if correct answer
                score++; //Increment score by 1
                //highScore.innerHTML = "Highscore: " + score; //High score is displayed
                feedback.innerHTML = "Correct!";
                
                
            } else {
                feedback.innerHTML = "Incorrect!";
            };
            endQuiz.disabled = false; //When clicked, function is run, "nextQuestion" button and "endQuiz" button are enabled
            nextQuestion.disabled = false; 
            option1.disabled = true; //When clicked, function is run, option buttons are disabled
            option2.disabled = true; 
            option3.disabled = true; 
            
    };
}


/*Show user result

score.innerHTML = score;

totalQuestions.innerHTML = allQuestions.length;
*/

//Display the users score on the result page
//document.getElementsById('userscore').innerHTML = score;
 

//When a quiz is started, in a function: a sort method that returns a new array, which is limited to 10 questions
//The function should reshuffle the questions and your answers