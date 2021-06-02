// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.

function pickPrefix(strings, prefix) {
    let result = []
    for(let  i = 0; i < strings.length; i++) {
        let word = strings[i].slice(0, prefix.length)
        if(word === prefix) {
            result.push(strings[i])
        }
    }
    return result;
}

console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// [''mistake', 'misspeak', 'mission']