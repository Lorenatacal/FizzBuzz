
const isDivisibleByThree = n => (n % 3 === 0)

const isDivisibleByFive = n => (n % 5 === 0)

const isDivisibleByThreeAndFive = n => (n % 3 === 0 && n % 5 === 0)

function fizz (n) {
    if (isDivisibleByThree(n) === true) {
        return "Fizz";
    }
    return n;
}

function buzz (n) {
    if (isDivisibleByFive(n) === true) {
        return "Buzz";
    }
}


module.exports = {
    isDivisibleByThree,
    isDivisibleByFive,
    isDivisibleByThreeAndFive,
    fizz,
    buzz,
}