// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.

function lalaLanguage(str) {
    let words = str.split(" ");
    let result = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.length > 3) {
            let newWord = changeWord(word)
            result.push(newWord)
        } else {
            result.push(word)
        }
    }
    return result.join(" ")
}

function changeWord(word) {
    let Str = ""
    let vowels = "aeiou"
    for (let j = 0; j < word.length; j++) {
        let char = word[j]
        if (vowels.includes(char)) {
            Str += char + "l" + char 
        } else {
            Str += char
        }
    }
    return Str
}
console.log(lalaLanguage('this is pretty strange')); // 'thilis is preletty stralangele'
console.log(lalaLanguage('can you speak our language')); // 'can you spelealak our lalangulualagele'