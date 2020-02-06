let arr = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']

let input = 'programlala'
// Sample Input = input

let newArr = []

arr.forEach( (val, index) => {
  input.includes(val) ? newArr.push(val) : ''
})

console.log(newArr)