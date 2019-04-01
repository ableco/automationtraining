var input = 914753783;
var numberArray = input.toString().split("");
let convertNum = "";
var num = numberArray.sort(function(a, b) {
  return b - a;
});

num.forEach(function(a) {
  convertNum += a + "";
});
console.log(convertNum);
