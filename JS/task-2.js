const total = 100;
const ordered = 80;

if (ordered <= total) {
    console.log(`Заказ оформлен, с вами свяжется менеджер. На складе осталось ${total - ordered} товаров.`);
} else {
    console.log('На складе недостаточно твоаров!');
}