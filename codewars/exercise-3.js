/* Your task is to remove all duplicate words from string, leaving only single (first) words entries.
Example:
Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output: 'alpha beta gamma delta' */

const removeDuplicateWords = function(input){
  
    const words = input.split(' ')

    const noDuplicated = words.reduce((accumulator, currentValue) => {
        if(accumulator.indexOf(currentValue) === -1){
            accumulator.push(currentValue);
        }
        return accumulator

    },[])
    return noDuplicated.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))


