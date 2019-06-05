let longString = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
let arr_String = longString.split(' ')

arr_String = arr_String.reduce((accu, val) => {
    if (!accu.includes(val)) {
        accu.push(val);
    }
    return accu;
}, [])

console.log(arr_String) // [ 'alpha', 'beta', 'gamma', 'delta' ]