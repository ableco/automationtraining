// Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
// Only Positve numbers passed to the function , numbers Contain digits [1:9] inclusive 
// Digit Duplications could occur , So also consider it when forming the Largest  !alt


const number=9999769
let digitCount= number.toString().length
function convertIntegerToArray(number)
{
    let tempNumber = number
    let array = []
    for (let i=0; i<digitCount; i++){
        array[i]=tempNumber%10
        tempNumber=Math.trunc(tempNumber/10)
    }
    return array.reverse()
}
function convertArrayToInteger (array){
    let tempNumber=' '
    for (let i=0; i<digitCount; i++){
        tempNumber+=array[i].toString()
    }
    return tempNumber.trim()
}
function getLargestNumber (number) {
    let digits = convertIntegerToArray(number)
    let maximum = digits.sort(function(a,b) {return b-a})
    return convertArrayToInteger (maximum)
}
console.log(`Original Number:${number} and length ${digitCount}`)
console.log(`Largest Number:${getLargestNumber(number)}`)

