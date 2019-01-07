//1     доделать второе условие
function multyply() {
    if (arguments.length == 0) console.log("enter ur number");
    let multyply = 1;
    for (let num of arguments) {
        multyply *= num;
    }
    return multyply;
}
const resOfMulty = multyply(3, 6);
console.log(resOfMulty);

//2
function reverse(str) {
    let letters = str.split('');
    letters.reverse();
    return letters.join('');
}
console.log(reverse('test'));

//3

function getCodeStringFromText(word) {
    let charcode = '';
    for (let i = 0; i < word.length; i++) {
        charcode += word.charCodeAt(i) + " ";
    }
    return charcode;
}
let str = getCodeStringFromText("hello");
console.log(str);


//4 доделать switch

function guessNumber(num) {
    num = prompt('введите число от 0 до 10', '');
    if (num < 0 || num > 10) alert("число должно быть от 0 до 10!");

    function getRandom() {
        return Math.round(Math.random() * 10);
    }
    let ourNum = getRandom();
    if (num === ourNum) {
        console.log("Вы угадали");
    } else {
        console.log("Вы не угадали, ваше число " + num + ", а выпало " + ourNum);
    }
}
guessNumber();

//5 +++++++++++++++++++++++++++++

function numArray(num) {
    let numsArray = [];
    for (let i = 0; i < num; i++) {
        numsArray[i] = i + 1;
    }
    return numsArray;
}
let res = numArray(7);
console.log(res);

//6 
//Создать функцию, которая принимает массив,
//а возвращает новый массив с дублированными элементами 
//входного массива:
//doubleArray([1,2,3]) // [1,2,3,1,2,3]