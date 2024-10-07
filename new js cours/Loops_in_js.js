//  Date : 01/11/2024      Lecture 3 : Loops  in javaScript 

// #. Loops in js
// -> Loops are used to execute a pies of code again & again . ?

// 1. for loop

// print 1 to 5 with the help of for loop .

// let n = 5;

// for(let i=1; i<=n; i++){
//     console.log(i);
// }

// Q1. Print the sum of 1 to n number . ?

// let name = prompt("Type your Name : ");
// let sum = 0;
// for(let i=1; i<=name; i++){
//     sum += i;
// }
// console.log("Enter Number is : ",name);
//     console.log("1 to n numbers sum is : ",sum);


//      #. Infinite loop : A loop that never ends :

// 2. while loop 

// let i=1; // Initialization
// while(i<=10){ // condition 
//     console.log(i);  print
//     i++ // Increment 
// }


// 3. do-while loop 

// let i=99;
// do{             // at lest 1 time run 
//     console.log(i);
//     i++;
// }while(i<0);


// 4. for-of loop : it's ues for string and array .

// let str = "JavaScript"; // string 
// let size = 0; // variable for size of string
// for(let valu of str){       // syntax of for-of
//     console.log("i=",valu);
//     size++;
// }

//     console.log("String size = ",size); // print size 


// 5. for-in loop : it's ues for objects & array . 

// const student = {
//     name : "Naruto",
//     age : 19,
//     cpg : 4.2,
//     ispass : true,
// };

// for(let key in student){
//     console.log("key = ",key,"|| value is : ",student[key]);
// }


// Q1. print the all even numbers between 0 to 100 . ?

// for(let i=1; i<=100; i++){
//     if(i%2==0) console.log(i);
// }


// [NOTE : in javaScript we ues Extra operator for datatype check (===) . if left side datatype is same or not of right side datatype. ]

// Q2. Create a game where you start with any random game number. Ask user to keep guessing the game number until the user enters correct value . ?

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while(userNum != gameNum){
//     userNum = prompt("Worng : Again :");
// }

// console.log("Congrations , your no is Right");

