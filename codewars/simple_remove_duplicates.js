function solve (arr) {
    size = arr.length
    var result = []
    for (let i = size-1; i >= 0; i--){    
        if(result.indexOf(arr[i]) == -1){ 
            console.log(arr[i])
            result.push(arr[i])
        }
    }
    result = result.reverse()
    return result
}

console.log(solve ([3, 4, 4, 3, 6, 3]))
