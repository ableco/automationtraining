//In this Kata, you will remove the left-most duplicates from a list of integers and return the result.
// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
//solve ([3, 4, 4, 3, 6, 3]) # => [4, 6, 3]

const list = [3,4,4,3,6,3]
console.log(`Original List:`)
console.log(list)
function removeLeftDuplicates (list) {
    list.reverse()
    let array = []
    for (let i=0; i<list.length; i++) {
        if (array.indexOf (list[i]) === -1) {
            array.push(list[i])
        }
    }
    return array.reverse()
}
console.log(`List with left duplicates removed`)
console.log(removeLeftDuplicates (list))
