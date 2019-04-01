var numbers = [3, 4, 4, 3, 6, 3];
var finalString = [];

/* without reduce  
numbers.filter(function(number,index){
   if(index!=0 && index!=1 && index != 3){
       finalString.push(number)
   }
}) 
console.log(finalString)  */

numbers.reduce((acumulador, number, index) => {
  if (index != 0 && index != 1 && index != 3) {
    finalString.push(number);
  }
  return acumulador;
});
console.log(finalString);
