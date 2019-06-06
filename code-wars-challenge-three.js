const text =
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
//Convert the string to an array
const textArray = text.split(" ");
//Filter the items and join
const textfilter = textArray
  .filter((item, index) => textArray.indexOf(item) === index)
  .join(" ");
console.log(textfilter);
