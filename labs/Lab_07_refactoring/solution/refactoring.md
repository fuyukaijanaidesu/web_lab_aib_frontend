## Лабораторная работа 7

### Задание 1. level stone
```js
var a = prompt('var one');
var _ = prompt('var two');

if (a === _)
console.log('equally');
else
console.log('not equally');

var b = 'world';
var a = a + b;
```

### Задание №2. level iron
```js
var f = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);
console.log(f[3]);
console.log(f[4]);

if (f[0] === 'apple') console.log('apple green')
if (f[0] === 'strawberry') console.log('strawberry red')
if (f[0] === 'blueberry') console.log('blueberry blue')
if (f[0] === 'raspberry') console.log('raspberry light red')
if (f[0] === 'lemon') console.log('lemon yellow')
if (f[1] === 'apple') console.log('apple green')
if (f[1] === 'strawberry') console.log('strawberry red')
if (f[1] === 'blueberry') console.log('blueberry blue')
if (f[1] === 'raspberry') console.log('raspberry light red')
if (f[1] === 'lemon') console.log('lemon yellow')
if (f[2] === 'apple') console.log('apple green')
if (f[2] === 'strawberry') console.log('strawberry red')
if (f[2] === 'blueberry') console.log('blueberry blue')
if (f[2] === 'raspberry') console.log('raspberry light red')
if (f[2] === 'lemon') console.log('lemon yellow')
if (f[3] === 'apple') console.log('apple green')
if (f[3] === 'strawberry') console.log('strawberry red')
if (f[3] === 'blueberry') console.log('blueberry blue')
if (f[3] === 'raspberry') console.log('raspberry light red')
if (f[3] === 'lemon') console.log('lemon yellow')
if (f[4] === 'apple') console.log('apple green')
if (f[4] === 'strawberry') console.log('strawberry red')
if (f[4] === 'blueberry') console.log('blueberry blue')
if (f[4] === 'raspberry') console.log('raspberry light red')
if (f[4] === 'lemon') console.log('lemon yellow')
```

### Задание 3. level gold
```js
var d = prompt('Введите кол-во человек ', undefined);
if (!isNaN(parseFloat(d))) {
    d = parseFloat(d)
} else {
    d = 0;
}
while (d === 0) {
    var d = prompt('Введите кол-во человек ', undefined);
    if (!isNaN(parseFloat(d))) {
        d = parseFloat(d)
    } else {
        d = 0;
    }
}
var k = prompt('Введите зарплату на человека ', undefined);
if (!isNaN(parseFloat(k))) {
    k = parseFloat(k);
} else {
    k = 0;
}
while (d === 0) {
    var k = prompt('Введите зарплату на человека ', undefined);
    if (!isNaN(parseFloat(k))) {
        k = parseFloat(k)
    } else {
        k = 0;
    }
}

alert('Затраты на ЗП' + d * k);
```
### Задание 4
```js
var klassSoStudentami = [{
    FIO: 'Петров А.А.',
    Ocenka: 5
}, {
    FIO: 'Иванов Б.Б.',
    Ocenka: 3.4
}, {
    FIO: 'Сидоров Г.Г.',
    Ocenka: 9
}, {
    FIO: 'Немолодой Д.Д',
    Ocenka: 2
}, {
    FIO: 'Молодой Е.Е',
    Ocenka: 3.4
}];
var s = 0;
var kolichectvo = 0;
var ploxieStudenti = [];
for (var PoryadkoviyNomer = 0; PoryadkoviyNomer < klassSoStudentami.length; PoryadkoviyNomer++) {
    if (klassSoStudentami[PoryadkoviyNomer].Ocenka > 5) console.log('Это значение учитываться не будет оно не соответствует допустимым значениям');
    if (klassSoStudentami[PoryadkoviyNomer].Ocenka < 0) console.log('Это значение учитываться не будет оно не соответствует допустимым значениям');
    if (!(klassSoStudentami[PoryadkoviyNomer].Ocenka <= 5 && klassSoStudentami[PoryadkoviyNomer].Ocenka >= 0)) continue;
    if (klassSoStudentami[PoryadkoviyNomer].Ocenka < 4) ploxieStudenti.push(klassSoStudentami[PoryadkoviyNomer])
    s = s + klassSoStudentami[PoryadkoviyNomer].Ocenka;
    kolichectvo = kolichectvo + 1;
}
s = s / kolichectvo;
console.log('Средняя оценка: ' + s);
console.log('Плохие студенты:');
if (ploxieStudenti.length === 0) console.log('Таких нет');
ploxieStudenti.forEach((znachenie) => {
    console.log('Фио: ' + znachenie.FIO + '; Оценка: ' + znachenie.Ocenka)
});
```
### Задание 5
##### Необходимо просмотреть свой код из предыдущей лабораторной работе и провести работу над ошибками (если, конечно, ошибки есть)

Вроде исправлять нечего.
```js
console.log("Задание 1");
let apple = 10;
console.log(apple);
let condition = Math.random().toString(36).substring(7);
console.log(condition);
console.log('Good game is ' + condition)

console.log("Задание 2");
let int = 42;
let string = '100';
let bool = true;

console.log(int);
console.log(string);
console.log(bool);

console.log(int + string);
console.log(int + bool);
console.log(string + bool);
console.log(int + string + bool);
console.log(string + int + bool);
console.log(bool + string + int);

console.log("Задание 3");
let array = [];

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) - 50;
    array.push(randomNumber);
}

console.log("Исходный массив:", array);

let filteredArray = array.filter(num => num >= 0);

console.log("Отфильтрованный массив:", filteredArray);

console.log("Задание 4");

function getRandomNumber() {
    return Math.random();
}

function multiplyArrayByNumber(arr, number) {
    return arr.map(item => item * number);
}

const generateRandomWord = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        word += alphabet[randomIndex];
    }

    return word;
}

console.log(getRandomNumber());
console.log(multiplyArrayByNumber([1, 2, 3, 4], 5));
console.log(generateRandomWord());

console.log("Задание 5");

const person = {};
person.firstName = 'Иван';
person.surname = 'Иванов';
person.patronymic = 'Иванович';
person.birthday = '01.01.1990';
person.hobby = 'футбол';
person.group = 'А';

person.getInfo = function() {
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(this.birthday.split('.')[2]);
    const age = currentYear - birthYear;

    return `ФИО: ${this.surname} ${this.firstName} ${this.patronymic}\nГод рождения: ${birthYear}\nХобби: ${this.hobby}\nВозраст: ${age}`;
};

alert(person.getInfo());

const salaries = {
    Иванов: 50000,
    Петров: 60000,
    Сидоров: 55000,
    Козлов: 45000,
    Смирнов: 70000,
    Кузнецов: 65000,
    Васильев: 55000,
    Морозов: 50000,
    Новиков: 55000,
    Лебедев: 60000
};

let totalSalary = 0;
for (let key in salaries) {
    totalSalary += salaries[key];
}

console.log('Общая зарплата сотрудников:', totalSalary);
```
