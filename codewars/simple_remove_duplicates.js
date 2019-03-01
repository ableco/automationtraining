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



/*
function isBigEnough(value) {
    return value >= 10;
  }
  
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); 
console.log(filtered)


/*
if(result.indexOf(string[i]) == -1){ 
            console.log(string[i])
            result.push(string[i])
        }

function solve (arr) {
    var result = []
    size = arr.length
    for (let i=0; i < size; i++){
        
    }
    result = result.join(" ");
    return result
}
 */
