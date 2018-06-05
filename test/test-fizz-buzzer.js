const expect = require('chai').expect;

const fizBuzzer = require('../fizzBuzzer');

describe('fiz-buzzer', function() {
  it('should return \'fizz-buzz\' if input is divisible by 15', function() {
    const divBy15Cases = [-45, -30, -45, 0, 15, 30, 45];

    divBy15Cases.forEach(function(input) {
      expect(fizBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  it('should return \'buzz\' if input is not 0 and is divisble by 5 and not by 3', function() {
    const divBy5Cases = [-10, -5, 5, 10];

    divBy5Cases.forEach(function(input) {
      expect(fizBuzzer(input)).to.equal('buzz');
    });
  });

  it('should return \'fizz\' if input is not 0 and is divisble by 3 and not by 5', function() {
    const divBy3Cases = [-6, -3, 3, 6];

    divBy3Cases.forEach(function(input) {
      expect(fizBuzzer(input)).to.equal('fizz');
    });
  });

  it('should return the input if it is not divisible by 3 or 5', function() {
    const nonDivCases = [-13, -4, 1, 7];

    nonDivCases.forEach(function(input) {
      expect(fizBuzzer(input)).to.equal(input);
    });z
  });

  it('should throw error if input is not a number', function() {
    const nonNumbers = ['a', [], null, {}];

    nonNumbers.forEach(function(input) {
      expect(function() {
        fizBuzzer(input);
      }).to.throw(Error);
    });
  });

});