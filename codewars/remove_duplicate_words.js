function removeDuplicateWords (s) {
    string = s.split(' ')
    var result = []
    let j = 0
    for (let i=0; i<string.length; i++){
        console.log(result.indexOf(string[i]))
        if(result.indexOf(string[i]) == -1){ 
            console.log(string[i])
            result.push(string[i])
        }
    }
    result = result.join(" ");
    return result
}

example = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
console.log(removeDuplicateWords (example))
