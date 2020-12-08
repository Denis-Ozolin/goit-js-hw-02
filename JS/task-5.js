const checkForSpam = function(message) {
    const lowerCaseMsg = message.toLowerCase();

    return lowerCaseMsg.includes('sale') || lowerCaseMsg.includes('spam');
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true