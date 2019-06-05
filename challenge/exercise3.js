let arr_String = (longString) => 
    longString.split(' ').reduce((accu, val) => {
        !accu.includes(val) ? accu.push(val) : false 
    return accu
}, [])

let new_arr = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
console.log(arr_String(new_arr)) 
// Output: [ 'alpha', 'beta', 'gamma', 'delta' ]