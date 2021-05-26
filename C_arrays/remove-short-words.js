// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

function removeShortWords(str){
let arr = str.split(" ");
let result = [];
for(let i = 0; i < arr.length; i++){
if(arr[i].length >= 4){
    result.push(arr[i])
}
}
return result.join(" ")
}

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'
