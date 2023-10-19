## Лабораторная работа 7

### Задание 1. level stone
```js
var variable1 = prompt('var one');
var variable2 = prompt('var two');

if (variable1 === variable2)
console.log('equally');
else
console.log('not equally');
```

### Задание №2. level iron
```js
var fruit = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
    
    switch (fruit[i]) {
        case 'apple':
            console.log('apple green');
            break;
        case 'strawberry':
            console.log('strawberry red');
            break;
        case 'blueberry':
            console.log('blueberry blue');
            break;
        case 'raspberry':
            console.log('raspberry light red');
            break;
        case 'lemon':
            console.log('lemon yellow');
            break;
        default:
            console.log('Unknown fruit');
    }
}

```

### Задание 3. level gold
```js
function promptValidNumber(message) {
    let input = prompt(message);
    while (isNaN(parseFloat(input)) || parseFloat(input) <= 0) {
        input = prompt(message);
    }
    return parseFloat(input);
}

const numberOfPeople = promptValidNumber('Введите кол-во человек');
const salaryPerPerson = promptValidNumber('Введите зарплату на человека');
const totalCost = numberOfPeople * salaryPerPerson;

alert('Затраты на ЗП: ' + totalCost);
```
### Задание 4
```js
var studentsData = [
    { fullName: 'Петров А.А.', grade: 5 },
    { fullName: 'Иванов Б.Б.', grade: 3.4 },
    { fullName: 'Сидоров Г.Г.', grade: 9 },
    { fullName: 'Немолодой Д.Д', grade: 2 },
    { fullName: 'Молодой Е.Е', grade: 3.4 }
];

var totalGrade = 0;
var studentCount = 0;
var lowGradedStudents = [];

for (var studentIndex = 0; studentIndex < studentsData.length; studentIndex++) {
    var currentGrade = studentsData[studentIndex].grade;

    if (currentGrade > 5) {
        console.log('Это значение учитываться не будет, так как не соответствует допустимым значениям.');
        continue;
    }

    if (currentGrade < 0) {
        console.log('Это значение учитываться не будет, так как не соответствует допустимым значениям.');
        continue;
    }

    if (!(currentGrade <= 5 && currentGrade >= 0)) {
        continue;
    }

    if (currentGrade < 4) {
        lowGradedStudents.push(studentsData[studentIndex]);
    }

    totalGrade += currentGrade;
    studentCount++;
}

var averageGrade = totalGrade / studentCount;
console.log('Средняя оценка: ' + averageGrade.toFixed(2));

console.log('Плохие студенты:');
if (lowGradedStudents.length === 0) {
    console.log('Таких нет');
}

lowGradedStudents.forEach((student) => {
    console.log('ФИО: ' + student.fullName + '; Оценка: ' + student.grade);
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
