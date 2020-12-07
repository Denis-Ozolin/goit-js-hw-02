let input = '';
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число');
    
    if (input !== null) {
        input = Number(input);
        if (Number.isNaN(input)) {
            alert('Было введено не число, попробуйте еще раз');
        } else {
            numbers.push(input);
        }  
        
    } else {
        
        for (const number of numbers){
            total += number;
        }
       
        
        // console.log(numbers);
        console.log(`'Общая сумма чисел равна ${total}`);
        
        break;
    }
} 





