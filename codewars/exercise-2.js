// Given a number , Return _The Maximum number _ 
// could be formed from the digits of the number given .

const maxNumber = function(input){
    
    let digits = input.toString().split('')
    digits = digits.sort((a,b) =>  b - a)
    
    return Number(digits.join(''))
}

console.log(maxNumber(566797))