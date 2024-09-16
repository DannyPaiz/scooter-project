// require the User and Scooter classes - see where they can be used in ScooterApp.js

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers) {
    // set of objects, or set of arrays
    this.stations = {
      station1: [],
      station2: [],
      station3: []
    }

    this.registeredUsers = {}
  }

  registerUser(username, password, age) {
    const u1 = new User(username, password, age)
    let obj = this.registeredUsers
    if(obj.length == undefined && age >= 18) {
      obj[username] = u1;
      return u1;
    } 

    else if(obj.length !== undefined) {
      for(let i in obj) {
        if(username != i && age >= 18) {
          obj[username] = u1
          return i
        } else {
          throw new Error("already registered or too young to register.")
        }
      }
    } else {
      throw new Error('already registered or too young to register');
    }
  }

  // object {} / set for users
  logoutUser(username) {
      let obj = this.registeredUsers;
      for(let i in obj) {
        if(username === i) {
          obj[i].logout()
          return
        }
      }
      throw new Error('no such is logged in.')
  }

  createScooter(station) {
    const scooter1 = new Scooter(station);
    let obj = this.stations;
    for(let i in obj) {
      if(i === station) {
        obj[station].push(scooter1)
        return
      }
    }
    throw new Error('no such station error')
  }


  }

}

module.exports = ScooterApp
