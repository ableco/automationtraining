const maxNumber = (number) => {
    const numberToString = number.toString();
    const stringToArray = numberToString.split('');
    const sortArray = stringToArray.sort((a, b) =>  b - a);
    const newNumber = sortArray.join('');  
	return Number(newNumber);
}
console.log(maxNumber(63729)); 

