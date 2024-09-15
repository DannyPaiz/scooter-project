const Scooter = require('../src/Scooter')
const User = require('../src/User')

// typeof scooter === object

describe('scooter object', () => {
  test('Scooter class should create Scooter instance with correct values', () => {
    const scooter = new Scooter('Venice')
    expect(scooter).toBeInstanceOf(Scooter)
    expect(typeof scooter.station).toBe('string');
    expect(scooter.station).toBe('Venice')

    expect(scooter.user).toBe(null)

    expect(typeof scooter.charge).toBe('number');
    expect(scooter.charge).toBe(100)

    expect(typeof scooter.isBroken).toBe('boolean');
    expect(scooter.isBroken).toBe(false)

    let scooterSerial = scooter.getSerial();
    expect(scooterSerial).toBe(1)
  })

  test('testing nextSerial static implementation', () => {
    const scooter1 = new Scooter('San Pedro');
    const scooter2 = new Scooter('Long Beach');
    const serialResult = scooter1.getSerial();
    const serialResult2 = scooter2.getSerial();
    expect(serialResult).toBe(2);
    expect(serialResult2).toBe(3);

  })


})

// Method tests

describe('scooter methods', () => {
  // tests here!

  // rent method

  // dock method

  // requestRepair method

  // charge method

})
