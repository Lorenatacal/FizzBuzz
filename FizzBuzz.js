
const isDivisibleByThree = n => (n % 3 === 0)

function isDivisibleByFive(n) {
    if(n % 5 === 0) {
        return true;
    }
    return false;
}

module.exports = {
    isDivisibleByThree,
    isDivisibleByFive
}