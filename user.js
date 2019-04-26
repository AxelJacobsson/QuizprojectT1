// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

    // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname, failedCategory) {
      this.firstname = firstname;
      this.score = 0;
      this.failedCategory = 0;
    }
};
