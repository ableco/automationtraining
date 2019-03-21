//  Remove the 3's at indices 0 and 3
//  followed by removing a 4 at index 1
// solve ([3, 4, 4, 3, 6, 3]) # => [4, 6, 3]

let duplicate_array = [3, 4, 4, 3, 6, 3]
let unique_array = []

function removeDuplicates(arr) {
    for (let i = arr.length-1; i>=0; i--) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i])
        }
    }
    return unique_array.reverse()
}
console.log(removeDuplicates(duplicate_array)); 
