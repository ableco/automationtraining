function userNumber(num1) {
    return num1
}
var number = userNumber(9216),
    output = [],
    sNumber = number.toString();
    console.log(sNumber);
for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(sNumber.charAt(i));
}
var swapped;
 do {
     swapped = false;
     for (var i=0; i < output.length-1; i++) {
         if (output[i] > output[i+1]) {
             var temp = output[i];
             output[i] = output[i+1];
             output[i+1] = temp;
             swapped = true;
         }
     }
 } while (swapped);
function digitCount ( num )
    { 
     return num.toString().length;
    }
var lengthNumber= digitCount(9216)
lengthNumber = lengthNumber-1
var z = 0;
for(i=lengthNumber; i>=0; i--) {
    var x = Math.pow(10, i)
    var y = x * output.pop()
    z = y+z
}
console.log(z)

