
const isDivisibleByThree = n => (n % 3 === 0)

const isDivisibleByFive = n => (n % 5 === 0)

const isDivisibleByThreeAndFive = n => (n % 3 === 0 && n % 5 === 0)

function fizz (n) {
    if (isDivisibleByThree(n)) {
        return "Fizz";
    }
    return n;
}

function buzz (n) {
    if (isDivisibleByFive(n)) {
        return "Buzz";
    }
    return n;
}

function fizzBuzz (n) {
    if(isDivisibleByThreeAndFive(n)) {
        return "FizzBuzz";
    }
    return n;
}


module.exports = {
    isDivisibleByThree,
    isDivisibleByFive,
    isDivisibleByThreeAndFive,
    fizz,
    buzz,
    fizzBuzz,
}