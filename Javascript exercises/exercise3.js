let input =
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
var stringArray = input.split(" ");
var finalString = "";
/* without reduce   
stringArray.filter(function(word,index){
    if(stringArray.indexOf(word)>=index){
        finalString+=word+' '
    }
})
console.log(finalString) */

stringArray.reduce((acumulador, word, index) => {
  if (stringArray.indexOf(word) >= index) {
    finalString += word + " ";
  }
  return acumulador;
}, "");

console.log(finalString);
