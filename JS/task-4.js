let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const value = prompt('Сколько дроидов вы желаете приобрести?');

totalPrice = value * pricePerDroid;

if (value === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {   
    console.log('Недостаточно средств на счету!');
} else {
    alert(`Вы купили ${value} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
};