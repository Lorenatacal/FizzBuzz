var functions = require('./FizzBuzz.js');
const isDivisibleByThree = functions.isDivisibleByThree;
const isDivisibleByFive = functions.isDivisibleByFive;

test("isDivisibleByThree() should return true when a number argument is divisible by 3", () => {
    expect(isDivisibleByThree(3)).toEqual(true);
});

test("isDivisibleByThree() should return false when a number argument is not divisible by 3", () => {
    expect(isDivisibleByThree(4)).toEqual(false);
});

test("isDivisibleByFive() should return true when a number argument is divisible by 5", () => {
    expect(isDivisibleByFive(5)).toEqual(true);
});