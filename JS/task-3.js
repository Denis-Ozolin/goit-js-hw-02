const findLongestWord = function(string) {

    let longWord = '';
    
    string = string.split(' ');

    for (let word of string){    
        if (longWord.length < word.length) {
           longWord = word;
        }
    }
    return longWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'