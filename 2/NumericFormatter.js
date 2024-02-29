/*
Вам дан ряд чисел и маска из символов Х по которой их нужно отформатировать, 
нужно вернуть отформатированную строку по маске. 
Если количество символов в исходной строке меньше чем в маске то нужно повторять 
исходную последовательность чисел, маска так же может содержать иные символы 
кроме Х тогда их нужно перенести в результирующую строку без изменения.

”0123”, “+7 XXX XXX XX-XX” ⇒ “+7 012 301 23-01” 
*/

const numericFormatter = (numbers, mask) => {
    // code here
};

// TEST
const showResult = (result, needResult) => {
    console.log(result === needResult, ` ${result}`);
};
showResult(numericFormatter('0123', '+7 XXX XXX XX-XX'), '+7 012 301 23-01');
showResult(numericFormatter('42', 'XX XX MAGICXX'), '42 42 MAGIC42');
showResult(numericFormatter('01234567890', '+7(XXX)XXX-XX-XX'), '+7(012)345-67-89');
