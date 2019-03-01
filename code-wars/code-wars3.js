const deleteDups = n => Array.from(new Set(n.split(' '))).join(' ')

const myString ='alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
console.log(deleteDups2(myString))
