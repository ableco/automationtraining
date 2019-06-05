let convertMaxNumber = (num) => {
    let digits = num.toString().split('').map(Number).sort((a, b) => {
      return b-a
    })
  return digits.join('')
}

console.log(convertMaxNumber(213)) // Output: 321
console.log(convertMaxNumber(7389)) // Output: 9873
console.log(convertMaxNumber(63729)) // Output: 97632
console.log(convertMaxNumber(566797)) // Output: 977665
console.log(convertMaxNumber(17693284)) // Output: 98764321