// Write a function `censorSentence(sentence, targetWords)` that accepts a sentence string and an array
// of target words as arguments. The function should return a new sentence where any target words

function censorSentence(sentence, targetWords) {
    let words = sentence.split(" ")
    let result = []
    for(let i = 0; i < words.length; i++) {
        let word = words[i]
        if(targetWords.indexOf(word) > -1){
            for(let i = 0; i < word.length; i++){
                result.push("*")
            }
            
        }else {
            result.push(word)
        }
    }
    return result.join(" ")
}


// have all of their characters replaced with '*'s.

console.log(censorSentence('where the heck is my celery', ['heck', 'celery'])); 
// 'where the **** is my ******'

console.log(censorSentence('why you little sweetheart', ['sweetheart', 'salad'])); 
// 'why you little **********'