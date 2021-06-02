// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

function mostLetterWord(str, str2){
let words = str.split(" ")
let result = []
for(let i = 0; i < words.length; i++){
    let word = words[i]
    let count = word_count(word, str2)
    result.push([word, count])
}
return finalWord(result)
}

function word_count(word, str2) {
    let count = 0
    for(let j=0; j<word.length; j++){
        let char = word[j]
        if(char === str2) {
            count += 1
        }
    }
    return count
}

function finalWord(result){
    let first = ""
    let second = result[0][1]
    for(let i = 1; i < result.length; i++) {
        if(second < result[i][1]) {
            second = result[i][1]
            first = result[i][0]
        }   
    }
    return first
}


console.log(mostLetterWord('she received an award for excellence in science', 'e')); // 'excellence'
console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'