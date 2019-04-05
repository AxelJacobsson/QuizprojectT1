// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

    // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname) {
      this.firstname = firstname;
      this.score = 0
    }
};

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

    //user is directed to next page
    location.assign('instructions.html')
  })