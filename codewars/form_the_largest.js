function maxNumber(n){
    const size = (n.toString().length)
    const nString =  n.toString()
    let number = []
    let numberMax = 0

    for (let i=0; i<size; i++){
        number[i] = nString.charAt(i)      
    }
    n = number.sort().reverse()
    for (let i=0; i<size; i++){
        let number = Number.parseInt(n[i])        
        numberMax = numberMax + (number * (Math.pow(10,size-i-1)))   
    } 
    console.log(numberMax)
}


maxNumber(61211067)
