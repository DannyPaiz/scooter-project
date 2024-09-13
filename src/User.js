class User {
  // User code here
  #username;
  #password;
  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
    this.loggedIn = false;
  }

  // Getters || Setters || Manipulators
  getUsername = () => {
    return this.#username;
  }

  getPassword = () => {
    return this.#password;
  }

  // Session in future?
  logout = () => {
    this.loggedIn = false;
  }

  login = (password) => {
    let myP = this.getPassword()
      if(myP === password) {
        this.loggedIn = true;
      } else {
        throw new Error('Incorrect Creds');
      }
  }

}

module.exports = User
