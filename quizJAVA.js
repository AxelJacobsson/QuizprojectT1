
//Update the inner HTML of our elements
const start = document.getElementById("start-button"); 
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");


//Array for all questions

const allQuestions = [question1, ];




//CLASSES


//#1 Class: User 
class User {
    constructor(name) {
        this.name = name;
    }
};


//#2 Class: Question generator
class QuestionGen {
    constructor(category, question, wrong1, wrong2, correct) {
        this.category = category;
        this.question = question;
        this.wrong1 = wrong1;
        this.wrong2 = wrong2;
        this.correct = correct;
    }
};

//Creating a question
const question1 = new QuestionGen('Conditionals', 'What is a function?', 'serf', 'srf', 'correct');
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




//#3 Class: Quiz generator
class QuizGen {
    constructor() {
        this
    }
};

























//NOTES



//Class: User advanced
//property "taking quizzes" store all quizzes in there, copies of quizzes the user took, in the user classassign a property called given anser (true/false), count those true/flase properties


//CLass: Statistics
//property in the quiz: true/false, create if statement (if statement is correct add a point)





//To access the properties (= "question" - "correct"), in this case accessing the first question in the first category
//.question access the first property
questionsCat1[0].question




