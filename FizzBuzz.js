
const isDivisibleByThree = n => (n % 3 === 0)

const isDivisibleByFive = n => (n % 5 === 0)

function isDivisibleByThreeAndFive(n) {
    if (n % 3 === 0 & n % 5 === 0) {
        return true;
    }
    return false;
}


module.exports = {
    isDivisibleByThree,
    isDivisibleByFive,
    isDivisibleByThreeAndFive
}