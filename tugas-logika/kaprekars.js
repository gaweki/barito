const convertKaprekars = (num) => { 
  if(num < 1000 || num > 9999){
    console.log("num < 1000 || num > 9999")
    return false
  } 
  const ajaib = 6174;
  let count = 0;

  const calculateResult = (number) => {
    count++; 
    const numArr = String(number).split('');
    let max = Number(numArr.sort((a, b) => b-a).join(''));
    let min = Number(numArr.sort((a, b) => a-b).join(''));
    while (max < 1000) {
      max = max * 10;
    }
    return max - min === ajaib ? ajaib : calculateResult(max - min);
  }
  
  while (true) {
    let result = calculateResult(num);
    if (result === ajaib) {
        return count;
    }
  }
  
}
  
  console.log(convertKaprekars(3124))