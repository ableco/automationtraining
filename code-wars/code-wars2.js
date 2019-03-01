const maxNumber = function (number) {
    const max = number.toString().split('')
    let newNumber = ''
    max.sort().reverse().forEach( function (item) {
        newNumber = newNumber + item
    })
    return(Number(newNumber))
}

console.log(maxNumber(215))



