// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

function makeAcronym(str) {
  let arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i][0];
  }
  return newStr.toUpperCase();
}

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
