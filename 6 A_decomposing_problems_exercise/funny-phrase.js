// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function funnyPhrase(str) {
  let result = []
  let words = str.split(" ")
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let count = getCount(word) 
    if(count >=2){
      let newWord = addVowels(word)
      result.push(newWord)
    }else {
      result.push(word)
    }
  }
return result.join(" ")
}

  function getCount(word) {
    
    var vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    for (let char of word) {
      if (vowels.includes(char)) {
        vowelsCount += 1
      }
    }
   
    return vowelsCount
 
  }

  function addVowels(word){
    let vowelWord = ""
    let v = "aeiou" 
    for(let i = 0; i < word.length; i++){
      let char = word[i]
      if(v.includes(char)){
          vowelWord += char + char;
      }else {
          vowelWord += char
      }
  }
  return vowelWord;
  }


console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'