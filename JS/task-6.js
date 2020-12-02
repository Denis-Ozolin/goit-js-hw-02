let input = prompt('Введите число');
const numbers = [];
let total = 0;

while (true) {
    if (input !== null) {
        numbers.push(Number.input);
        for (const number of numbers){
            total += number;
        }
    } else { 
            console.log(`'Общая сумма чисел равна ${total}`);
        break;
    }
}