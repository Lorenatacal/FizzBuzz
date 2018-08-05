const IsDivisibleByThree = require('./FizzBuzz');

test("IsDivisibleByThree() should return true when a number argument is divisible by 3", () => {
    expect(IsDivisibleByThree(3)).toEqual(true);
});

test("IsDivisibleByThree() should return false when a number argument is not divisible by 3", () => {
    expect(IsDivisibleByThree(4)).toEqual(false);
});