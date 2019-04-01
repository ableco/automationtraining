let number1 = 999999988769
let maxNumber = function(number){
    return String(number).split('').sort().reverse().join('')
}
console.log(maxNumber(number1))