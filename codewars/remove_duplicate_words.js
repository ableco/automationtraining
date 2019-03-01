function removeDuplicateWords (s) {
    string = s.split(' ')
    var result = []
    for (let i=0; i<string.length; i++){
      if(result.indexOf(string[i]) == -1){ 
            result.push(string[i])
        }
    }
    result = result.join(" ");
    return result
}

example = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
console.log(removeDuplicateWords (example))
