let number = 123454321

const maximun_number = function (val) {
  let maximun = val.toString().split("").sort().reverse().join("")
  return Number(maximun)
}

console.log(maximun_number(number))

