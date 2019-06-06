const numbers = [3, 4, 4, 3, 6, 3];
const filteredNumbers = filterDuplicatedLeftNumbers(numbers);
function filterDuplicatedLeftNumbers(numbers) {
  return numbers.filter((number, index) => {
    //Check if the sliced array includes the number
    if (!numbers.slice(index + 1).includes(number)) {
      return number;
    }
  });
}

console.log(filteredNumbers);
