// const arr = [2, 3, 4];

// function division(a) {
//   return a ** 2;
// }

// const newArr = arr.map(division);
// console.log(newArr);

// even or odd num using map

// function defineNum(s) {
//   if (s % 2 === 0) {
//     console.log(s, "is even num");
//     return "even";
//   } else {
//     console.log(s, "is odd num");
//     return "odd";
//   }
// }

// const newArr = arr.map(defineNum);
// console.log(newArr);

// Хэрвээ тоо 5-аас их бол тусад нь push хийх[1,6,3,8] → [6,8]
// const arr = [1, 3, 5, 6, 7, 8];

// function define(a) {
//   if (a > 5) {
//     arr.push(a);
//     return a;
//   } else {
//     // delete arr[a];
//     console.log("lower number than 5");
//   }
// }
// const newArr = arr.map(define);
// console.log(newArr);

// Тоонуудыг шалгаад тэгш эсвэл сондгой гэж хэвлэх [1,2,3] → 1 → odd 2 → even 3 → odd
// const arr = [1, 2, 3, 4, 5];
// function isEvenOrOdd(a) {
//   if (a % 2 === 0) {
//     return a + " " + "is even num ";
//   } else {
//     return a + " " + "is odd num";
//   }
// }
// const newArr = arr.map(isEvenOrOdd);

// console.log(newArr);

// Шинэ массив руу 2 дахин үржүүлж push хийх [1,2,3] → [2,4,6]
// const arr = [1, 2, 3, 4, 5];

// function dup(s) {
//   return s * 2;
// }
// const newArr = arr.map(dup);
// console.log(newArr);

// Нэр бүрийн ард “-student” нэмээд хэвлэх ["Bold", "Suren"] → Bold-student, Suren-student
// const names = ["Bold", "Suren"];

// function addStr(s) {
//   return s + " - student";
// }
// const newArr = names.map(addStr);
// console.log(newArr);

// const ages = [12, 32, 18, 24, 81];

// function bornYear(s) {
//   return 2025 - s;
// }
// const bornYears = ages.map(bornYear);
// console.log(bornYears);

// Стринг бүрийн эхний nүсгийг том болго.
// const arr = ["hello", "my", "name", "is", "danny"];

// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// const capitalLetters = arr.map(capitalizeFirstLetter);
// console.log(capitalLetters);

// Стринг массивыг тэдгээрийн уртын массив болгон хувирга.
// const stringArray = ["apple", "banana"];
// const newArr = [];
// stringArray.forEach(str => {
//   newArr.push(str.length);
// });

// console.log(newArr);

// Бүтээгдэхүүний массив дахь бүх үнэд 10% нэмсэн шинэ массив гарга.
// const price = [100, 200, 300];
// function incrPrice(param1) {
//   return (param1 * 110) / 100;
// }
// const newPrice = price.map(incrPrice);
// console.log(newPrice);

// Тоонуудыг “₮1,200” гэх мэт форматтай мөнгөн дүнгийн стринг болго.
// const price = [100, 200, 300];
// function turnIntoStr(s) {
//   return "$" + s;
// }
// const newPrice = price.map(turnIntoStr);
// console.log(newPrice);

// Boolean утгуудыг “ТИЙМ” эсвэл “ҮГҮЙ” стринг болгон хувирга.
// const bools = [true, false, true, false];
// function turnIntoStr(s) {
//   if (s === true) {
//     return (s = "yes");
//   } else {
//     return (s = "no");
//   }
// }

// const newBools = bools.map(turnIntoStr);
// console.log(newBools);

// Массив дотрох тоонуудыг 1-ээр нэмэгдүүлээд шинэ массив буцаа/хэвлэ
// const nums = [1, 2, 3, 4, 5, 6];
// function incr(s) {
//   return s + 1;
// }
// const newNums = nums.map(incr);
// console.log(newNums);

// Массивын бүх элементийг хэвлэх [1,2,3] → 1 2 3 гэж console.log хийх
// const nums = [1, 2, 3, 4, 5, 6];

// nums.forEach(str =>{
//   console.log(str)
// })

// Нийлбэр олох (sum)forEach ашиглан [1,2,3,4] → 10
// const nums = [1, 2, 3, 4];
// let sum = 0;
// nums.forEach((number) => {
//   sum += number;
//   console.log(sum);
// });

// Шинэ массив руу 2 дахин үржүүлж push хийх [1,2,3] → [2,4,6]
// const nums = [1, 2, 3, 4];
// let newNums = [];
// nums.forEach((number) => {
//   newNums.push(number * 2);
// });

// console.log(newNums);

// Нэр бүрийн ард “-student” нэмээд хэвлэх ["Bold", "Suren"] → Bold-student, Suren-student
// const names = ["bold", "suren"];
// const newNames = [];
// names.forEach((s) => {
//   newNames.push(s + " - student");
// });
// console.log(newNames);

// Массивт хэдэн элемент байгааг forEach ашиглан count хийх ["a","b","c"] → 3
// const el = ["a", "b", "c"];
// let counter = 0;

// el.forEach((s) => {
//   console.log(s);
//   counter++;
// });
// console.log(counter);

// const words = ["apple", "banana", "orange", "grape"];
// // Method 1: Using Array.some() and String.includes()
// const includesA = words.some((word) => word.toLowerCase().includes("a"));
// console.log(includesA); // true

// array доторх бүх text-ийн эхний үсгийг авах ["dog","cat"] → d, c
// const words = ["apple", "banana", "orange", "grape"];
// let newWords = [];
// words.forEach((s) => {
//   newWords.push(s.charAt(0));
// });
// console.log(newWords);

// Тоонуудын сөрөг утгыг console.log хийх [3,-2,5,-10] → -2, -10
// const nums = [1, 2, 3, 4];
// const newNums = [];
// nums.forEach((s) => {
//   newNums.push(s * -1);
// });
// console.log(newNums);

// “a” үсэг агуулсан үгсийг ялгаж хэвлэх ["bat","dorj","amar"] → bat, amar
const names = ["bat", "dorj", "amar"];
let includesA = [];
let count = 0;
names.forEach((a) => {
  if (a.includes("a") == true) {
    includesA.push(a.toLowerCase().includes("a") && a);
  } else {
    return null;
  }
});
console.log(includesA);
