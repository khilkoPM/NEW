"use strict";

console.log('arr' + "- object");
console.log(4 + "- object");
console.log(4 + +"5"); // унарный плюс


let incr = 10,
    decr = 10;
    
// incr++; // постфиксная форма инкремента
// decr--; // постфиксная форма декремента

// ++incr; // префиксная форма
// --decr; // префиксная форма

// console.log(incr);
// console.log(decr);

// console.log(incr++); выводит старое значение
// console.log(decr--);

console.log(++incr); //добавляет
console.log(--decr); //отнимает

console.log(5%2);

console.log(2*4 == 8); // true

console.log(2*4 == '8'); // true

console.log(2*4 === '8'); // false

console.log(2*4 === 8); // true

console.log(2 + 2 * 2 === 8); // false

console.log(2 + 2 * 2 != 6); // false (отрициние равенства, неравен)

console.log(2 + 2 * 2 !== '6'); // true (отрициние равенства, неравен)

const isChecked = false,
      isClose = false;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);

console.log(isChecked || !isClose);








