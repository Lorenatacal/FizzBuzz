
const isDivisibleByThree = n => (n % 3 === 0)

const isDivisibleByFive = n => (n % 5 === 0)

function isDivisibleByThreeAndFive() {
    return true;
}


module.exports = {
    isDivisibleByThree,
    isDivisibleByFive,
    isDivisibleByThreeAndFive
}