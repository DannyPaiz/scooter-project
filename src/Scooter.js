const { User } = require('../src/User');

class Scooter {
  // scooter code here
  /**
   * requires user to work
   * 
   * string station
   * user object of user w/ checked out scooter and null when docked
   * serial nuber sequentially from nextSerial
   * charge() a number from 0 (no charge) to 100.
   * isBroken() returns boolean 
   * 
   * all scooters are docked when created,
   * rent(user) - instance of user as one-to-many
   *  above 20% return to dock ,remove user as rentee
   *  otherwise throw an error "scooter needs to charge or scooter needs repair."
   */
  static #nextSerial = 0
  #serial
  constructor(station) {
    this.station = station;
    this.#serial = (Scooter.#nextSerial += 1);
    this.user = null;
    this.charge = 100;
    this.isBroken = false;
    
  }

  // Getter
  getSerial() {
    return this.#serial;
  }

  // Methods
  rent = (user) => {
    if(!user) return;
    if(this.charge >= 20 && (this.isBroken === false)) {
      this.user = user;
    } else {
      throw new error('scooter needs to charge or scooter needs repair')
    }
  }

  dock = (station) => {
    // check if station exists in array of stations
    if(!this.station) {
      this.station = station;
      this.user = null;
    }
  }

  // == BONUS METHODS
  recharge() {
    let min = this.charge;
    let max = 100;
    console.log(`Charging Start  %${min}`);
    let value = Math.floor(Math.random() * (max - min + 1) + min);
    this.charge += value;
    if(this.charge > 100) {
      this.charge = 100;
    } else {
      console.log(`Charging %${this.charge}`)
    }
  }

  requestRepair() {
    // check if isBroken is true
    // setInterval to repair in 5 seconds.
    // time elaspes, set isBroken = false
    // log repair completed to console
  }


}

module.exports = Scooter