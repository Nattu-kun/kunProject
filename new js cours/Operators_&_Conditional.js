// Artimetic Operators 

// let a = 10;
// let b = 2;

// console.log("a =",a," & b = ",b); 
// console.log("a + b = ",a+b);  // +
// console.log("a - b = ",a-b); // -
// console.log("a * b = ",a*b); // *
// console.log("a / b = ",a/b); // /
// console.log("a ** b = ",a**b); // ** Exponentiation
// console.log("a % b = ",a%b); // % Modulus

// Unary Operator
// (i) Increment pre(++a) and post(a++)
// (ii) Decrement pre(--a) and post(a--)
// let a = 10;
// let b = 2;
// console.log("a =",a," & b = ",b); 
// a++;
// b--;
// console.log("a value is = ",a," b value is = ",b);

// Assignment Operators

// let a = 10;
// let b = 4;

// a += 10;
// console.log(a)
// a -= 15;
// console.log(a)
// a *= 5;
// console.log(a)
// a /= 5;
// console.log(a)

// For value ** mens squar 

// let a = 10 ;
// let b = 2 ;
// console.log("a**b value is : ", a , b );
// console.log("A value is => ",a**b);


// Comparison Operators 

// Equal to == , Equal to & type ===
// Not equal to !=  , Not equal to & type !==
// Greatest > , Greatest & equal to >= , Less < , Less & equal to <=


// let a = 10 ;
// let b = 10;

// console.log("A and B between comparison",a>=b); // true
// console.log("A and B between comparison",a<b);  // false
// console.log("A and B between comparison",a<=b);  // true 
// console.log("A and B between comparison",a==b);  // true
// console.log("A and B between comparison",a===b);  // true
// console.log("A and B between comparison",a!==b);  // false
// console.log("A and B between comparison",a!=b);  // false


// Ternary Operators |

// Syntex : condition ? true output : false output 

// EXl

// let age = 21 ;
// console.log(age>18 ? "Adult" : "Not adult"); // it a simple ture of rule to if and else Eyes vay |


                         // Prompt use to user input 

// let name = prompt("Type your Name : ");
// console.log(name);


// Let's Practice

// Qs1. Get user to input a number using prompt("Enter a Number : ") . Check if the number is a multiple of 5 or not ?

// let num = prompt("Enter a Number : ");

// if(num % 5 === 0 ) console.log(num,"is Multiple by 5");
// else console.log(num,"is Not Multiple by 5");


// Qs2. WAP to which can give grades to students according to their scores |

/* 80-100,A
   70-89,B
   60-69,C
   50-59,D
   33-49,F
   0-10,You are Toper
*/

let scores = prompt("Enter Students Scores : ");
let grade;
if(scores >= 90 && scores <=100) grade = "A";
else if(scores >= 70 && scores <=89 ) grade = "B";
else if(scores >= 60 && scores <=69 ) grade = "C";
else if(scores >= 50 && scores <=59 ) grade = "D";
else if(scores >= 33 && scores <=49 ) grade = "F";
else grade = "Fale hai kya karega Dekh ke";
console.log("Your Grades is :",grade)