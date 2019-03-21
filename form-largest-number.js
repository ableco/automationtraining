num = [302]
function largestNumber(num) {
    num = String(num).split('').sort().reverse().join('');
    return Number(num);
}
console.log(largestNumber(num))
