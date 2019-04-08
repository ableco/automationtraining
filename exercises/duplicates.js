let array1 = [3,4,4,3,6,3]

let array2 = []

for(let i = array1.length; i > 0; i--) {
  let val = array1[i-1]
  if(!array2.includes(val)) {
    array2.unshift(val);
  }
}
array1 = array2
console.log(array1)

