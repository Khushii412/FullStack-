// var age = 12;
// if(age == 12){
//     console.log(age)
// }

// function solve(){
//     var age = 11;
//     console.log(age)
// }
// solve()
// console.log(age)
// let a = 10;
// function solve(){
//     let b = 20;
//     console.log(b);  
// }
// console.log(a)
// console.log(b); 
// let a = 10;
// console.log(a)
// a = "khushi";
// console.log(a)
// a = true;
// console.log(a)
// a = null;
// console.log(a);
//const a = 10;
//console.log(a);
//console.log(typeof(a))


//...............loops and strings...........
// let a =10
// for (let i=0; i<a; i++){
//    console.log(i)
//    if (i == 7)
//     continue;
   //else
   //console.log(i)   
//}
// in case of continue the message to print should be wriiten in code after continue else it will first print then will check the continue . 


// .................while loop ......................
// let i = 1;
// while(i<6){
//     console.log("inside the loop");
//     if(i == 4)
//     {
//         i++;
//         continue;
//     }
//     else{console.log(i)}
    
//     i++;
// }


// ........................strings........................
// let name = `khushi
// banerjee`
// console.log(name)
// // back ticks can be use to print the data as written. it will print as it is. 
// let nam = 'khushibanerjee'
// console.log(nam)

// let namee = new String("khushi")
// console.log(namee)

// ...............................
// let op1 = "english ";
// let op2 = "hindi";
// let ans = op1 + op2;  // concatination
// console.log(ans)
// let ans2 = `op1 + op2`  // back tick print as ir is
// console.log(ans2)
// let ans3 = `${op1}${op2} `  // to get value of variable inside backticks use ${}
// console.log(ans3)
// console.log(op1.toUpperCase())
// console.log(op2.toLocaleUpperCase())

// .........subString...............
// let ex = "khushiBanerjee"
// console.log(ex.substring(2))  // var.substring(start index of sub string)
// console.log(ex.substring(3, 8))   // var.substring(start index of sub string , stop index for sub string)
// but on 2nd case it leaves the last charachter of specified stop index

// ...............split()...................

// let sent = "hello this is khushi in her JS series";
// let words = sent.split('s');
// console.log(words)
// let word = sent.split(' ');
// console.log(word)
// split() splits the sentence in words of array based on the value provided inside the brackets, like space ' ' or any letter as 's' etc.

// in JS a string inside a string is treated differently. like "abcde"f"ghijkl".. here is wriiten is substring inside 
// a string. but instead it will break it into 2 strings a-e and g-l. to write quotes inside string use slash. 


//let sentnc = "hello this is "khushi" banerjee"; 
//console.log(sentnc) // not running.
// thus 
// let sentnc = "hello \"khushi\" this side";
// console.log(sentnc)
// backslash is strings emphasizes to not treat the charachter next to me as special charachter, treat the next 
// charachter normally.
// if 2 \\ are wriiten together inside the string it cancelize the power or use of \ .

let sent = "\\ hello \\ jee \\ kaise \\ ho \\ sare";
//console.log(sent.split('\\'))
let word = sent.split('\\')
console.log(word)
console.log(word.join(''))  // join() joins the array into string as mentioned in the brackets, " " or "-" or "," etc.