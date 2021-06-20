// Write a function `letterMap` that accepts a string and an object as arguments. The function should
// return a version of the string where characters that appear as keys in object are replaced with
// their corresponding values.

function letterMap(str, obj) {
let result = ""
let words = str.split("")
let k = Object.keys(obj)
for(let i = 0; i < k.length; i++) {
    let char = k[i]
    if(str.includes(char)){
        newChar = getChar(char, str)
        result += newChar
    } 
}
return result
}

function getChar(char, str) {
word = ""
for(let j= 0; j < str.length; j++){
    
}
}

console.log(letterMap("symbolic", { y: "i", o: "a", c: "k" })); // 'simbalik'
console.log(letterMap("colossal", { o: "x", s: "p" })); // 'cxlxppal'
console.log(letterMap("miniscule", { u: "t", i: "f", e: "q" })); // 'mfnfsctlq'