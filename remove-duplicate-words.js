let myString = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
let uniqueList = myString.split(' ').filter(function(allItems,i,a) {
    // console.log(`${allItems} -------> ${a.indexOf(allItems)}`)
    return i == a.indexOf(allItems);
}).join(' ');
console.log(uniqueList)
