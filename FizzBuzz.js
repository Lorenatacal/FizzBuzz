

function isDivisibleByThree(n) {
    return n % 3 === 0;
}

const isDivisibleByFive = n => (n % 5 === 0)

const isDivisibleByThreeAndFive = n => (n % 3 === 0 && n % 5 === 0)

function game (n) {
        if(n === 0) { return 0;} 
        if(isDivisibleByThreeAndFive(n)) {return 'FizzBuzz';} 
        if(isDivisibleByThree(n)) {return 'Fizz';} 
        if(isDivisibleByFive(n)) {return 'Buzz';}
        return n;
    }



module.exports = {
    isDivisibleByThree,
    isDivisibleByFive,
    isDivisibleByThreeAndFive,
    game,
}