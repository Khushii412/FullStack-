// .................function hoisting
// {

// myname("khushi")

// function myname(name){
//     console.log(name)
// }


// }


//................. variable hoisting

// console.log(age)
// var age = 21;


// console.log(age)

// const age = 21


// .................normal function
// {
//     myname()
//     function myname(){
//         console.log("khushi")
//     }
// }
// ................variable function
// {
//     myname()
//     let myname = function(){
//         console.log("khushi")
//     }
    
// }
// .....................arrow function
// myname()
// let myname = () => {
//     console.log("khushi")
// }

// age(8)
// let age = (num) => {
//     console.log(num)
// }


//...........class 

// class human{
    
// }
// const obj = new human();

// ...................passing function as an argument

// function greetMe(greet, name){
//     console.log(name);
//     greet(7);
// }

// function greet(age){
//     console.log("helloji", age)
// }
// greetMe(greet, "khushi")


// .....................passing functions in a array.

const arr = [
    function one(a,b){
        console.log(a+b)
    },
    function two(a,b){
        console.log(a-b)
    },
    function two(a,b){
        console.log(a%b)
    },
]

let ans = arr[2]
let val = ans(4,5)