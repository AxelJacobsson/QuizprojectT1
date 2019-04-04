// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

    // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname) {
      this.firstname = firstname;
    }
  }
  
  // Checks if user is already registered in local storage
  
  var users;
  
  if (localStorage.getItem('users') === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      users[i] = new User(users[i].firstname);
    }
  }
  
  // Bind the button to a variable for later use
  var submit = document.getElementById('submit');

  
  if (submit) {
    // Bind the onClick-function to our own function
    submit.onclick = function(){
  
      // Bind the input field and get the value
      var inputUsername = document.getElementById('type-name');
  
      if(inputUsername.value.length == 0){
        // We set the resultspan with a new text and return false to get out of this function
        resultSpan.innerText = "You need to enter a username in order to take the quiz";
        return false;
      }
    };  
  }