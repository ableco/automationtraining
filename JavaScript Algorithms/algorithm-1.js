let duplicated = [3, 4, 4, 3, 6, 3]
let integers = []

let RemoveDup = function(array){
    let reversed = array.reverse()
for (let i = 0; i < reversed.length; i++){
        if (integers.indexOf(reversed[i]) === -1){
            integers.push(reversed[i])
        }        
    }
    return integers.reverse()
}

console.log(RemoveDup(duplicated))