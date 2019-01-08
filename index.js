//1    
function multyply() {
 if(arguments.length==0) return 0;
    let multyply = 1;
    for (let num of arguments) {
        multyply *= num;
    }
    return multyply;
}
const resOfMulty = multyply(3, 8);
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


//4 
function guessNumber(num) {
    num = prompt('введите число от 0 до 10', '');
    function getRandom() {
        return Math.round(Math.random() * 10);
    }
    let ourNum = getRandom();
    
    if (num < 0 || num > 10 || num == null) {
        alert("число должно быть от 0 до 10!");
    } else  if (num === ourNum) {
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

function doubleArray(arr) {
    let arr2 = arr.concat(arr);
    return arr2;
}
let arr = doubleArray([0, 9, 6]);
console.log(arr);


//7  
//Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива 
//первый элемент, а возвращает массив из оставшихся значений: 
//changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], 
//changeCollection([1,2,3]) → [ [2,3] ] и т.д.

   function arrays() {
       let newArr = [];
       for (let i = 0; i < arguments.length; i++) {
          arguments[i].splice(0, 1);
          newArr[i] = arguments[i];
       }
            return newArr;

   }
let res2 = arrays([1, 7, 9], [5, 4, 0]);

console.log(res2);

//8
//Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и 
//значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый 
//массив с пользователями соответсвующие у казанным параметрам.

//funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , 
//{name: “Ivan”, age: “20”, gender: “male”} ]


let usersArray = [
    {name: 'Kate',
        age: 28,
        gender: 'female'
    },
    {
        name: 'Alex',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Olha',
        age: 17,
        gender: 'female'
    },
    {
        name: "Vova",
        age: 29,
        gender: 'male'
    }];
    
function users(usersArray) {
  var nameLengths = users.map(function(user) {
  return user.gender;
});
}


    
    let result = users();
    console.log(result);