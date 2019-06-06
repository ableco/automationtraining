function maxNumber(n) {
  //Convert the number to a string and split into an array
  const numArray = n.toString().split("");
  //Sort by the greatest number and join
  const result = parseInt(numArray.sort((a, b) => b - a).join(""));
  return result;
}
