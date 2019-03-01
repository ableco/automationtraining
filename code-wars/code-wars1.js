const solve = function(arr) {
    let dupIndexes = [], resultArray = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                dupIndexes.push(i)
                break
            }
        }
        if (!dupIndexes.includes(i)) {
            resultArray.push(arr[i])
        }
    }
    return resultArray
}

const numbers = [1,2,1,2,1,1,3]
console.log(solve(numbers))



