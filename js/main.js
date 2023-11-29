// 1-savol
// let a = 45;
// let b = 33;
// let max;
// if (a > b) {
//     max = (a / 10 - (a % 10 /10))
// }
// else{
//     max = (b / 10 - (b % 10 /10))
// }
// console.log(max);

// 2-savol

// let a = 885;
// let bir = a % 10;
// let on = ((a % 100 - bir)/10);
// let yuz = ((a - (on * 10 + bir)) / 100)
// let min;
// if (bir > on) {
//     min = on
// }
// else{
//     min = bir
// }
// if(min > yuz){
//     min  = yuz
// }
// console.log(min);

// 3-misol
// let a = 651;
// let on = ((a % 100 - (a % 10))/10);
// let res;
// if (on % 3 == 0) {
//     res = "Rost"
// }
// else{
//     res = "Yolg'on"
// }

// 4-misol
// let a = 5;
// let b = 9;
// let y = 7;
//  let min;
// if (a > b) {
//     min = b
// }
// else{
//     min = a;
// }
// if(min > y){
//     min  = y
// }
// min**=3;
// console.log(min);

// 5-misol
// let f = 154;
// let a = 211;
// let c = 4;
// let b = 78;
// let max ;
// if (a > b) {
//     max = a
// }
// else{
//     max = b;
// }
// if (max < c) {
//     max = c
// }
// if (max < f) {
//     max = f
// }
// console.log(max);

// 6-misol
// let a = 1014;
// let b = 100;
// let y = 908;
// let min;
// let max;
// let total = (a + b + y);
// let res;
// if (a > b) {
//   min = b;
//   max = a
// } else {
//   min = a;
//   max = b
// }
// if (min > y) {
//   min = y;
// }
// if (max < y){
//     max = y
// }
// res = total - (min + max);
// console.log(res)

// 7-misol
// let a = 1014;
// let b = 100;
// let y = 908;
// let min;
// let max;
// let total = (a + b + y);
// let res;
// if (a > b) {
//   min = b;
//   max = a
// } else {
//   min = a;
//   max = b
// }
// if (min > y) {
//   min = y;
// }
// if (max < y){
//     max = y
// }
// res = total - (min + max);
// console.log("Bu sonlarni o'rtachasi:"  + " " + res + " bu sonlarni eng kattasi: " + " " + max);

// 8-misol
// let a = 44;
// let b = 75;
// let c = 1;
// let d = 69;
// let e = 21;
// let count = 0;
// if (a % 3 == 0) {
//     count++
// }
// if (b % 3 == 0) {
//     count++
// }
// if (c % 3 == 0) {
//     count++
// }
// if (d % 3 == 0) {
//     count++
// }
// if (e % 3 == 0) {
//     count++
// }
// console.log(count);

// 9-misol
// let a = 45;
// let b = 90;
// let c = 15;
// let d = 60;
// let count = 0;
// if (a % 3 == 0) {
//   count++;
// }
// if (b % 3 == 0) {
//   count++;
// }
// if (c % 3 == 0) {
//   count++;
// }
// if (d % 3 == 0) {
//   count++;
// }

// if (a % 5 == 0) {
//   count++;
//   if (a % 3 == 0) {
//     count--;
//   }
// }
// if (b % 5 == 0) {
//   count++;
//   if (b % 3 == 0) {
//     count--;
//   }
// }
// if (c % 5 == 0) {
//   count++;
//   if (c % 3 == 0) {
//     count--;
//   }
// }
// if (d % 5 == 0) {
//   count++;
//   if (d % 3 == 0) {
//     count--;
//   }
// }

// console.log(count);

// 10-misol
// let a = 41;
// let b = -5;
// let c = 6;
// let res = 0;
// if (a  != 0) {
//     res+=a
// }
// if (b  != 0) {
//     res+=b
// }
// if (c  != 0) {
//     res+=c
// }
// console.log(res);

// 11-misol
// let a = 824;
// let bir = a % 10;
// let on = ((a % 100 - bir)/10);
// let yuz = ((a - (on * 10 + bir)) / 100)
// let total = 1;
// if (bir % 2 == 0) {
//     total*=bir
// }
// if (on % 2 == 0) {
//     total*=on
// }
// if (yuz % 2 == 0) {
//     total*=yuz
// }
// console.log(total);

// 12-misol
// let a = -4;
// let b = 46;
// let c = -5;
// let count = 0;
// let total = 0;
// if (a > 0) {
//     count++
//     total+=a
// }
// if (b > 0) {
//     count++
//     total+=b
// }
// if (c > 0) {
//     count++
//     total+=c
// }
// total/=count;
// if (count <=  0) {
//     total = "barcha sonlar manfiy"
// }

// console.log(total);

