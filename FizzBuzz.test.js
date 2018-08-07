var functions = require('./FizzBuzz.js');
const isDivisibleByThree = functions.isDivisibleByThree;
const isDivisibleByFive = functions.isDivisibleByFive;
const isDivisibleByThreeAndFive = functions.isDivisibleByThreeAndFive

test("isDivisibleByThree() should return true when a number argument is divisible by 3", () => {
    expect(isDivisibleByThree(3)).toEqual(true);
});

test("isDivisibleByThree() should return false when a number argument is not divisible by 3", () => {
    expect(isDivisibleByThree(4)).toEqual(false);
});

test("isDivisibleByFive() should return true when a number argument is divisible by 5", () => {
    expect(isDivisibleByFive(5)).toEqual(true);
});

test("isDivisibleByFive() should return false when a number is not divisible by 5", () => {
    expect(isDivisibleByFive(6)).toEqual(false);
});

test("isDivisibleByThreeAndFive() should return true if a number is divisible by 3 and 5", () => {
    expect(isDivisibleByThreeAndFive(15)).toEqual(true);
});

test("isDivisibleByThreeAndFive() shoul return false if a number is not divisible by 3 and 5", () => {
    expect(isDivisibleByThreeAndFive(16)).toEqual(false);
});