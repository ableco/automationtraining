let num_reverse = (numbers) => numbers.reverse().reduce((accu, val) => {
    !accu.includes(val) ? accu.push(val) : false
    return accu.reverse()
}, [])

let ls_numbers = [3, 4, 4, 3, 6, 3];
console.log(num_reverse(ls_numbers)) 
// Output: [ 4, 6, 3 ]


