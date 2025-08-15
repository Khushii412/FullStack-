// ..............function to print 1-10 count
// function counting(){
//     for(let i = 1; i<11; i++)
//     {
//         console.log(i)
//     }
// }
// counting()
//............passing parameter
// function number(num)    // the num is parameter
// {
//     console.log(num)
// }
// number(8)   // this 8 is argument
//.......................return function
// function getval(num1, num2, num3)
// {
//     let sum = num1 + num2 + num3;
//     return sum        // statements after return are not reachable
//     // let a = 8
//     // confirm.log(a)
// }
// console.log(getval(7,9,6))

// ................arraow funtion..........
// let sum = (num1, num2) => {
//     return num1 + num2
// }
// console.log(sum(8,9))

//,,,,,,,,,,,object...............

// let obj = {
//     name : "khushi",
//     age : 20,
//     greet: function(){
//         let a = 10
//         console.log(a)
//     }
// };
// console.log(obj)
// obj.greet()

// let arr = [1,2,3,4]
// // console.log(arr)
// // console.log(typeof(arr))
// console.log(arr[1])
//.............built in methods...............

//  let brr = new Array(1, "khushi", true)
//  brr.push("hello")
//  brr.pop()
//  brr.shift()
//  brr.unshift(8)
//  brr.push(4, "hello", "sneha")
//  brr.unshift("first")
//  console.log(brr.slice(2,4))
//  brr.splice(1, 2, "kumkum")
//  brr.splice(2, 3, "hii", "helloji")
//   console.log(brr)
// // console.log(typeof(brr))
// console.log(brr[1])

//............map()......
// arr = [10,2,3]
// let br = arr.map((number) => number*number)
    
// console.log(br)

// let brr = arr.map((num) =>
// {
//     console.log(num+2) 
// })

//..............filter()...............
// let arr = [10, 20, 30, 32, 31, 43, 44]
// let ans = arr.filter((num) => {
//     if(num%2 === 0){
//         return false
//     }
//     else{
//         return true
//     }
// })
// console.log(ans)

// let ans2 = arr.map((num) =>{
//     return num%2 === 0
// })
// console.log(ans2)

// let arr = ["khushi", "anu", "sakshi", null, 5, 8]
// let ans = arr.filter((val) =>{
//     if(typeof(val) === "string"){
//         return val
//     }
// })
// console.log(ans)

// ............... reduce()...........
// let arr = [10, 20, 30, 40, 4, 2, 9]
// // let ans = arr.reduce((acc, curr) => { return acc+curr} ,3
// // )
// // console.log(ans)

// arr.sort()
// console.log(arr)

//let ar = [2,8, 4, 0, 12]
//  ar.sort((a,b) => b - a)
//  console.log(ar)
//  console.log(ar.indexOf(4))

//............forEach.................
// ar.forEach((Val, ind) => {
//     console.log("value:" , Val, "index:", ind);
// })

//........for in loop..............
// let obj = {
//     name : "khushi",
//     age : 21, 
//     std : "bca"
// };

// for( let key in obj){
//     console.log(key, " ", obj[key])
// }

// ..........for of loop...........
let arr = [1,3,5,2,4]

for(let val of arr){
    console.log(val)
}

// function getSum(arr){
//     let sum = 0;     // alternative method of traditional loop to traverse through the wholw array
//     arr.forEach(val => {
//         sum = sum + val;
//     });
//     return sum; 
// }
//  let ans = getSum(arr)
// console.log(ans)