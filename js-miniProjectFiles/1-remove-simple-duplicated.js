
//First method I tried without using reduce, just comparing strings.
const removeDuplicatedFirstAttempt = function (numbersArray) 
{
    const newArray = []; 
    for (let i=0; i < numbersArray.length; i++)
    {
        let duplicatedIndex = false
        for (let j=i+1; j < numbersArray.length; j++ )
        {
            if (numbersArray[i] == numbersArray[j])
            {
                duplicatedIndex =true
                break;
            }
        }
        if (!duplicatedIndex) 
        {
            newArray.push (numbersArray[i])
        }
    }
    return newArray;
}
// This is an improved version, using reverse method instead of 2 for loops
const removeDuplicatedRefactored = function (numbersArray){
    let newArray = numbersArray.reverse().reduce (function (accum, item, index){
        if (index === 0)
        {
            accum.push (item);   
        }
        else if (accum.indexOf(item) === -1) {
            accum.push (item)
        }
        return accum;
    },[])
   return newArray.reverse(); 
}

const numbersArray = [3, 4, 4, 3, 6, 3];
//Both methods work.
console.log (removeDuplicatedFirstAttempt(numbersArray));
console.log (removeDuplicatedRefactored (numbersArray));
