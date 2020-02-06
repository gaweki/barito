let n = 2
// Sample Input = n
let indexFinish = Math.pow(10, n) - 1;
let arr = []

if(n < 2){
  arr.push(9)
} else {
  for(let i = 1; i <= indexFinish; i++){
   for(let j = 1; j <= indexFinish; j++){
     if(palindrome(i*j)){ 
       arr.push(i*j)
     }
    }
  } 
}

function palindrome(str) {
  let string = str.toString()
  if(str < 10){
    return false
  }
  const reversed = string
    .split('')
    .reverse()
    .join('');

  return string === reversed;
}

console.log("result:",arr[arr.length-1])