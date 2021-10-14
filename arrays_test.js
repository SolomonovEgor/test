"use strict";

// slice()

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. */

let arr = [1, 2, 3, 4, 5];

//ОТВЕТ

console.log(arr.slice(0, 3));
console.log(arr.slice(3));

// splice()

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */

//ОТВЕТ

console.log(arr.splice(1, 2));
console.log(arr.splice(0, 5, 2, 3, 4));
console.log(arr.splice(3, 0, "a", "b", "c"));
console.log(arr.splice(1, 0, "a", "b"));
console.log(arr.splice(6, 0, "c"));
console.log(arr.splice(8, 0, "e"));

console.log(arr);

// sort()

/* Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.  */

//ОТВЕТ

let arr1 = [3, 4, 1, 2, 7];

arr1.sort(); - тоже работает в данном случае, но правильно сравнивать каждый элемент между собой и получать больший и меньший распределять их в очереди. от меньшего к большему.

arr1.sort((a, b) => a - b);

// map()

найти новые суммы, включающие в себя изначальные цены и налог с продаж (1.06)
const prices = [19.99, 4.95, 25, 3.5];
let tax = 1.06;

//ОТВЕТ

let result = prices.map((item) => {
  let res = item * tax;
  return Number(res.toFixed(2));
});

console.log(result);

// filter ()

let users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" },
];

//ОТВЕТ

users.filter((item) => {
  let result = {};
  if (item.age > 25 && item.group == "admin") {
    return console.log(
      (result = {
        id: item.id,
        name: item.name,
        age: item.age,
        group: item.group,
      })
    );
  }
});

// some()

let arr3 = [12, 5, 8, 1, 4, 11, 25];

ОТВЕТ

arr3.some((item) => {
  if (item > 5 && item < 15) console.log(item);
});

// every()

Проверить елементы массива на соответствие условию

let arr4 = [1, 2, 3, 4, 5];

//ОТВЕТ

let result = arr4.every((item) => {
  if (item * 3 < 14) return item;
});
console.log(result);

// reduce ()

Найти средний возраст
let users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" },
];

//ОТВЕТ

let averAge = Math.round(
  users.reduce((acc, next) => acc + next.age, 0) / users.length
);
console.log(averAge);

// for

let users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" },
];

//ОТВЕТ

function adminId(arr) {
  for (let item of arr) {
    if (item.group === "admin") {
      console.log(`Admin id of ${item.name} is ${item.id}`);
    }
  }
}
console.log(adminId(users));

// forEach

let users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" },
];

//ОТВЕТ

users.forEach((item) => {
  if (item.id == 47) {
    console.log(`name: ${item.name}, age: ${item.age}, group: ${item.group}`);
  }
});
