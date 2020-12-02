const findLongestWord = function(string) {

    let longWord = '';
    
    string = string.split(' ');

    for (let i = 0; i < string.length; i += 1){    
        if (longWord.length < string[i].length) {
           longWord = string[i];
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