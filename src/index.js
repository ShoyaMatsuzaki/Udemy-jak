/**
 * const.let等の変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1)

//  val1 = "var変数を上書き"
//  console.log(val1)

//  var val1 = "var変数を再宣言"
//  console.log(val1)

// let val2 = "let変数"
// console.log(val2);

// val2 = "let変数を上書き"
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数を上書き";
// const val3 = "const変数再宣言";

// const val4 = {
//   name: "たかし",
//   age: 28,
// };
// val4.name = "taro"
// val4.addres = "Tokushima";
// console.log(val4);

// const val5 = ['dog','cat'];
// val5[0] = "bird"
// val5.push("monkey")
// console.log(val5);

// const name = "taro";
// const age = 26;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

// function func1(str){
//   return str;
// };
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func１です。"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));
// const myProfile = {
//   name: "taro",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`
// console.log(message1)

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2)

// const myProfile = ["taro", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`)
// sayHello();
// const arr1 = [1,2];
// // console.log(arr1)
// // console.log(...arr1)

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5,];
// const [num1,num2,...arr3] = arr2;
// console.log(num1)
// console.log(num2)
// console.log(arr3)

// const arr4 = [10, 20,];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6)

// const arr7 = [...arr4, ...arr5]
// console.log(arr7)

const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index　+ 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log (nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 ===1;
// })
// console.log(newNumArr)

// const newNameArr = nameArr.map((name) => {
//   if(name === "佐藤"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })

// console.log(newNameArr)
