// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

const array = [3, 4, 4, 3, 6, 3]
const removeDuplicates = function(arr){
    return arr.reduceRight((accumulator, currentValue) =>{
        if (accumulator.indexOf(currentValue) == -1){
            accumulator.unshift(currentValue)
        } 
        return accumulator
    },[])
}

console.log(removeDuplicates(array))