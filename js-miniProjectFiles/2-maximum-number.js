const maxNumber = function (numberStr)
{ 
    let newValue = '';
    let greaterValue = numberStr[0];
    let greaterValueIndex = 0;
    for (let h=numberStr.length; h >= numberStr.length && h > 0; h--)
    {
        for (let i=1; i < numberStr.length; i++)
        {
            if (numberStr[i] > greaterValue)
            {
                greaterValue = numberStr[i];
                greaterValueIndex = i; 
            }   
        }
        newValue= newValue + greaterValue;
        numberStr = numberStr.slice (0, greaterValueIndex) + numberStr.slice (greaterValueIndex+1) ;
        greaterValue = numberStr [0];
        greaterValueIndex = 0;   
    }
    return newValue;
}

let number = 17693284;
console.log(maxNumber (number.toString()));