let numbers = [3, 4, 4, 3, 6, 3];
let num_reverse = numbers.reverse() 

num_reverse = num_reverse.reduce( (accu, val) => {
    if (!accu.includes(val)) {
        accu.push(val);
    }
    return accu;
}, [])

console.log(num_reverse.reverse()) // [ 4, 6, 3 ]


