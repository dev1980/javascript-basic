// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.

function trendyText(str) {
    let words = str.split(" ")
    let result = []
    for(let i = 0; i< words.length; i++) {
        let word = words[i]
        let newWord = removeLastVowel(word)
        result.push(newWord)
    }
    return result.join(" ")
}


function removeLastVowel(str) {

    let vowels = "aeiou"
    for(let i = str.length -1; i >= 0; i--){
        let char = str[i]
        if(vowels.includes(char)) {
           return str.slice(0, i) + str.slice(i+1)
        }
    }
    return str
}


console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'