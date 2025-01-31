// String

//  1. string length hevle, jishee: "hello world"

// const string = "hello world"

// if(i = 0, i ){

// }

// Array

// variable

// 1. buh datatype shineer huvisagch zarla;

// 1-1 const

// const myString = "hello world";

// const myInteger = 100;

// const myFloat = 100.01;

// const myBoolean = false;

// const myArray = ["iphone", "imac", "ipad"];

// const myObject_iphone = { type: "iphone12", color: "white", created: 2021 };

// 1-2 let

// let myString = "hello world";

// let myInteger = 100;

// let myFloat = 100.01;

// let myBoolean = false;

// let myArray = ["iphone", "imac", "ipad"];

// let myObject_iphone = { type: "iphone12", color: "white", created: 2021 };

// 2. deer zaralsan huvisagchaa oorchlood hevle.

// 2-1 const

// const myString = "hello world";
// console.log(myString);

// const myInteger = 100;
// console.log(myInteger);

// const myFloat = 100.01;
// console.log(myFloat);

// const myBoolean = false;
// console.log(myBoolean);

// const myArray = ["iphone", "imac", "ipad"];
// console.log(myArray);

// const myObject_iphone = { type: "iphone12", color: "white", created: 2021 };
// Object.keys(myObject_iphone);
// console.log(Object.keys(myObject_iphone));

// 2-2 let

// let myString = "hello world";
// console.log(myString);

// let myInteger = 100;
// console.log(myInteger);

// let myFloat = 100.01;
// console.log(myFloat);

// let myBoolean = false;
// console.log(myBoolean);

// let myArray = ["iphone", "imac", "ipad"];
// console.log(myArray);

// let myObject_iphone = { type: "iphone12", color: "white", created: 2021 };
// Object.keys(myObject_iphone);
// console.log(Object.keys(myObject_iphone));

// if condition

// 1. 2 toonii ihiig ol jishee: a = 4, b = 3;

// const a = 4;
// const b = 3;

// if (a == b) {
//   console.log(`equal`);
// } else if (a > b) {
//   console.log(`a`);
// } else if (a < b) {
//   console.log(`b`);
// }

// 2. 3 toonii ihiig ol jishee: a = 4, b = 3, c = 5;

// const a = 4;
// const b = 3;
// const c = 5;

// if (a >= b && a >= c) {
//   console.log(`a`);
// } else if (b >= a && b >= c) {
//   console.log(`b`);
// } else if (c >= a && c >= b) {
//   console.log(`c`);
// }

// String

// 1. string length hevle. jishee: "hello world"

// const str = "hello world";
// console.log(str.length);

// 2. string-iig number bolgoj hevle jishee: "999" => 999

// const str = "999";

// console.log(parseInt(str));

// 3. string-iig useg tur buriig hevle. use loop

// const str = "hello world";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// Loop

// 1. 1-1000 hurtleh buh toog hevle

// for (let i = 1; i <= 1000; i++) {
//   console.log(i);
// }

// 2. 1-1000 hurtleh buh sondgoi toog hevle

// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 3. 1-1000 hurtleh buh tegsh toog hevle

// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 4. 1-1000 hurtleh buh toonii 100-d uldegdelgui huvaagdag toonuudiig hevle

// for (let i = 1; i <= 1000; i++) {
//   if (i % 100 == 0) {
//     console.log(i);
//   }
// }

// Array

//1. array buh element hevle jishee: [1,2,3,4,5]

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//2. array tegsh index dre bga elements hevle

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 0) {
//     console.log(array[i]);
//   }
// }

//3. array buh element-iin niilberiig ol.

// const array = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum = sum + array[i];
// }
// console.log(sum);

//4. array buh element-iig 2-oor nemegduul

// let array = [1, 2, 3, 4, 5];
// let sum_two = [];

// for (let i = 0; i < array.length; i++) {
//   sum_two.push(array[i] + 2);
// }
// console.log(sum_two);

//Function

//1. 1 parameter-tai function zarlaad parameter-iig hevle

// function dy(params) {
//   return console.log(params);
// }

// dy("Hello world");

//2. 2 toonii niilber oldog function bicheerei

// function dy(params, params1) {
//   return console.log(params + params1);
// }

// dy(1, 3);

//3. 2 toonii yalgavar oldog function bicheerei

// function dy(params, params1) {
//   return console.log(params - params1);
// }

// dy(3, 1);

//4. 2 toonii noogdvor oldog function bicheerei

// function dy(params, params1) {
//   return console.log(params / params1);
// }

// dy(1, 3);

//5. 2 toonii urjver oldog function bicheerei

function dy(params, params1) {
  return console.log(params * params1);
}

dy(1, 3);

// Object
// 1. name, age, gender geh field-tei shine object uusge
