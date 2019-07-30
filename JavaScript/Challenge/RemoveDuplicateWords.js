const removeDuplicateWords = (words) => {
  const wordsToArray = words.split(" "); 
  return wordsToArray.filter((value, index) => {
    return wordsToArray.indexOf(value) === index;
  });
}
const data = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
console.log(removeDuplicateWords(data)); 