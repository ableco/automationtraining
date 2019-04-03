// Your task is to remove all duplicate words from string, leaving only single (first) words entries.
// Example:

// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta'
//Output:
//'alpha beta gamma delta'

const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta'


function removeDuplicateWords (input) {
    let array=input.split(' ')
    let output = [];
    array.map((item, index)=> !output.includes(item) && output.push(item))
    return output
}

console.log(`Original Input: ${input}`)
console.log(`Duplicated words removed: ${removeDuplicateWords (input)}`)
