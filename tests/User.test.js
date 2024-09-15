const User = require('../src/User')

// User tests here
describe('User property tests', () => {

  /** code a lil, test a lil
   * create class, test instantiation vals
   * create methods, test them
   * reusability is key
   * instead of directly accessing params
   * make a getter and setter function
   * minimize xss
   */

  const user = new User('Joe Bloggs', 'test123', 21)
  // test username || GETTERS
  test('test private param Getters - getUsername()', () => {
    let gottenUser = user.getUsername()
    expect(gottenUser).toBe('Joe Bloggs')
  })

  // test password || GETTERS
  test('test private param Getters - getPassword()', () => {
    let gottenPass= user.getPassword()
    expect(gottenPass).toBe('test123')
  })

  // ANOTHER WAY to test username after GETTERS confirmed
  test('username should be a string', () => {
    let usernameVal = user.getUsername();
    expect(typeof usernameVal).toBe('string')
  })
  
  // ANOTHER WAY to test password after GETTERS confirmed
  test('password should be a string', () => {
    let passwordVal = user.getPassword();
    expect(typeof passwordVal).toBe('string')
  })

  // test age
  test('age should be a number', () => {
    expect(typeof user.age).toBe('number')
  })

  // test loggedIn
  test('loggedIn expected to be booolean', () => {
    expect(typeof user.loggedIn).toBe('boolean')
  })

  // test entire object
  test('check for correct object instantiated values', () => {
    let usernameVal = user.getUsername();
    let passwordVal = user.getPassword();
    expect(usernameVal).toBe('Joe Bloggs')
    expect(passwordVal).toBe('test123')
    expect(user.age).toBe(21)
    expect(user.loggedIn).toBe(false)
  })

  // test login
  test('test login to update loggedIn to true', () => {
    user.login('test123')
    let result = user.loggedIn
    expect(result).toBe(true)
  })

  test('test logout to update loggedIn to false', () => {
    user.logout()
    let result = user.loggedIn
    expect(result).toBe(false)
  })


})