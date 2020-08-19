function formattedPhone(phone) {
    // проверяем что ввел пользователь
    if (phone === '' || phone.length !== 12 || phone.charAt(0) !== '+') {
        return 'Формат ввода неправильный'
    }

    // если формат введенного номера соответсвует заданным параметрам
    // функция начнет форматирование
    let formatted = ""; // переменная для записи отформатированного телефона
    for (let i = 0; i < phone.length; i++) { // цикл форматирования
        if (i === 2) {
            formatted = formatted + ' (' + phone.charAt(i);
        } else if (i === 5) {
            formatted = formatted + ') ' + phone.charAt(i);
        } else if (i === 8 || i === 10){
            formatted = formatted + ' ' + phone.charAt(i);
        }else {
            formatted = formatted + phone.charAt(i);
        }
    }
    return formatted; // возвращаем результат
}
// узнаем у пользователя номер
let phone = prompt('Введите номер телефона:', '+71234567890');

// выводим результат
alert(formattedPhone(phone));