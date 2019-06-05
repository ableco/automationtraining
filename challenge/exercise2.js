let convertMaxNumber = (num) => {
    var digits = num.toString().split('');
    var realDigits = digits.map(Number)
    let order = realDigits.sort(function(a, b){
      return b-a})
    return order.join('')
  }

console.log(convertMaxNumber(213)) // 321
console.log(convertMaxNumber(7389)) // 9873
console.log(convertMaxNumber(63729)) // 97632
console.log(convertMaxNumber(566797)) // 977665
console.log(convertMaxNumber(17693284)) // 98764321