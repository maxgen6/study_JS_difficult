'use strict';

let str = prompt('Enter the line: '); // вводим строку
const goOverLine = function(line){ //задаем функцию goOverLine с аргументом line
    if(typeof line === 'string'){ //проверяем ли ввели строку
        line = line.trim(); //убираем пробелы
        if (line.length >= 30){  //если длинна строки больше 30 символов то
            line = line.substr(0, 30) + '...'; // то после 30 символа текст не выводим , а выводим многоточие 
        } 
        return line; //вызвыаем функцию
    }
};
console.log(goOverLine(str)); //выводим в консоль




