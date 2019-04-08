let text = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
let array1 = text.split(" ")
let array2 = []
for(let i = 0; i< array1.length; i++){
  val = array1[i]
  if(!array2.includes(val)) {
    array2.push(val)
  }
}

console.log(array2)
