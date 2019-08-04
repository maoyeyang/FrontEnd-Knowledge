function minlength(number, length, arr) {
  arr.sort((a, b) => a - b)
  let a = 0
  for (let i = 0; i < number - 1; i++) {
    if (a < ((arr[i + 1] - arr[i]) / 2)) {
      a = (arr[i + 1] - arr[i]) / 2
    }
  }
  if (arr[0] > a) {
    a = arr[0]
  }
  if ((length - arr[number - 1]) > a) {
    a = length - arr[number - 1]
  }
  return a.toFixed(2)
}

console.log(minlength(2, 5, [2, 5]))