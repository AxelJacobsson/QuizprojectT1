//CLASSES

//#1 Class: User 
class User {
    constructor(name) {
        this._name = name;
    }

    set name(value) {
        this._name = value;
    }
};

//#2 Class: Question generator
class QuestionGen {
    constructor(category, question, options, answer) {
        this.category = category;
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
};

//#3 Class: Quiz generator
class QuizGen {
    constructor() {
        
    }
};