

function isDivisibleByThree(n) {
    return n % 3 === 0;
}

const isDivisibleByFive = n => (n % 5 === 0)

const isDivisibleByThreeAndFive = n => (n % 3 === 0 && n % 5 === 0)

function fizz (n) {
    return isDivisibleByThree(n) ? "Fizz" : n;
}

function buzz (n) {
    return isDivisibleByFive(n) ? "Buzz" : n;
}

function fizzBuzz (n) {
    if(isDivisibleByThreeAndFive(n)) {
        return "FizzBuzz";
    }
    return n;
}

function game (n) {
    if (isDivisibleByThreeAndFive(n)) {
        return 'FizzBuzz';
    } else if(isDivisibleByThree(n)) {
        return 'Fizz';
    } else if (isDivisibleByFive(n)) {
        return 'Buzz';
    }
}


module.exports = {
    isDivisibleByThree,
    isDivisibleByFive,
    isDivisibleByThreeAndFive,
    fizz,
    buzz,
    fizzBuzz,
    game,
}