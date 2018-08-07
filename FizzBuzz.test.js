var functions = require('./FizzBuzz.js');
const isDivisibleByThree = functions.isDivisibleByThree;
const isDivisibleByFive = functions.isDivisibleByFive;
const isDivisibleByThreeAndFive = functions.isDivisibleByThreeAndFive;
const fizz = functions.fizz;
const buzz = functions.buzz;

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
    expect(isDivisibleByThreeAndFive(16) === true).toEqual(false);
});

test("fizz() should return 'Fizz' when the function isDivisibleByThree returns true", () => {
    expect(fizz(3)).toEqual('Fizz');
});

test("fizz() should return the number when the function isDivisibleByThree returns false", () => {
    expect(fizz(4)).toEqual(4);
});

test("buzz() should return 'Buzz' if the function isDivisibleByFive is true", () => {
    expect(buzz(5)).toEqual('Buzz');
});

test ("buzz() should return the number if the function isDivisibleByFive is false", () => {
    expect(buzz(7)).toEqual(7);
})