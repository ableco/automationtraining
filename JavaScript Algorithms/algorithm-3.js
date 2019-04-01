let string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
let newString = []

let deleteDupWords = function (array){
    let splitString = array.split(' ')
    for (i = 0; i < splitString.length; i++){
    if (newString.indexOf(splitString[i]) === -1){
        newString.push(splitString[i])
    }
}
    return newString.join(' ')
}

console.log(deleteDupWords(string))