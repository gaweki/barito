const arrDict = ["hot", "dot", "dog", "lot", "log"]

let input = 'hit dig'
//Sample Input = input
let arrInput = input.split('')
let arr = []
let newArrInput = []
let textHaveI = []

arrInput.forEach( (val,index) => {
  if(val === 'a' || val === 'i' || val === 'u' || val === 'e' ){
    newArrInput.push('o') 
  }else{
    newArrInput.push(val) 
  }
})

let newInputO = newArrInput.join('')
// 'hot dog'

let arrNewInputO = newInputO.split(' ')

let indexFirstSameText = 0
let indexLastSameText = 0

arrDict.forEach( (val, index) => { 
  if ( arrNewInputO[0] === val ) { 
    indexFirstSameText = index
  }
})

arrDict.forEach( (val, index) => { 
  if ( arrNewInputO[arrNewInputO.length - 1] === val ) { 
    indexLastSameText = index
  }
}) 
 

let spliceArrDict = arrDict.splice(indexFirstSameText,indexLastSameText+1)

let arrWordInput = input.split(' ')

let arrMix = []

 
spliceArrDict.forEach( (valSpliceArrDict, valSpliceArrDictIndex) => {
  // ["hot", "dot", "dog",] 
  arrMix.push(valSpliceArrDict)

  arrWordInput.forEach( (valArrWordInput, index) => {
    // ["hit", "dig", 
    
    if(valArrWordInput.includes('i') && valArrWordInput.replace(/i/g,'o') === valSpliceArrDict){
      
      arrMix.push(valArrWordInput)
      
    }
    
  })
})
 

console.log(arrMix)






