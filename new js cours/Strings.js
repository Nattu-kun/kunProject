// Date : 01/11/24          Strings in javaScript : in js string are Immutabel [not changebal] 

// string is a sequence of charactor used to represent text. 


//              #. Create String 

// let str = "Doon Group of Insitute";  // string
// console.log(str);



//              #. Inbuilt properties / function or method 

// 1. String length 

// let str = "Tanaka_kun bor";
// console.log(str.length);


//              #. String Indices 
// -> string charactor access or find . we youes index number . 

// let str = "Hello";
// console.log(str[3]);


//              #. Template Literals in javaScript 
// -> A way to have embedded expression in strings. ( `data` )
// Example =>  `This is a Template literal` // back tips 

// let str = `Strings wit  Literals`;
// console.log(str);


// #. String Interpolation
// -> To Create strings by doing substitution of placeholder 

// Exa ->

// let a = 10 ; 
// let b = 20 ;
// let sum = a+b;

// let str = `Best way to add ${sum}`; // we can add variable or some Expresion in leterlas 
// console.log(str);

// [NOTE : with the help of template literals we can add string to variable or Expresion . it's call string Interpolation.]


// Escape Charactors . in javaScript . 

// 1. -> '\n' (back slash n ) -> next line

// Exm => 

// console.log("Akari\nJiro");


// 2. -> '\t' (back slash t ) -> tab space


// console.log("Tanaka\tKun");

// #. '\n' and '\t' Oqupai (1 byte);

// let str = "\tData\nsize";
// let size = 0;
// for(let val of str){
//     console.log("val = ",val,"value : ",str[val]);
//     size++;
// }
//     console.log(size);


// String Methods in javaScript . 
// -> These are built-in function to manipulate a string 


// 1. str.toUpperCase() // Text in to Upper case 

// let str = "animeInrealWrold";
//     str = str.toUpperCase(); // str -> variable name & .toUpperCase in function
//     console.log(str);


// 2. str.toLowerCase() // Text in to lower case

// let str = "Apple AND You";
// console.log(str.toLowerCase());


// 3. str.trim() // Removes whitespaces 

// let text = "     Akari or Jiyu is Best love anime       ";
//     text = text.trim(); // it's trim only start space or last space . 
//     console.log(text);


// 4. variable.slice(star,end?) // Return part of srting 

// let anime = "A silent Voice";

// console.log(anime.slice(2,8)); // start to end-1 return 


// 5. variable1.concat(variable2) // joins variable with variable 

// let strOne = "Sawako"; // firstVariable 
// let strTwo = "Kagehaya";  // secondVariable

// let join = strOne.concat(strTwo); // join variable
// console.log(join);


// 6. variable.replace(sarchVariable,newVariable) // old to new data 

// let Konichiwa = "Hello";

// console.log(Konichiwa.replace("lo","p"));


// [NOTE : if I want to change all velue of replace ]

// variable.replaceAll(sarchVariable,newVariable) // ues All key word

// 7. variable.charAt(index) // find the Charactor with the help of index no and change har value : 

// let str = "Oyo";

// console.log(str.charAt(1));


// Let's Practice 

// Q1. Prompt the user to enter their full name. Generate a username for them based on the input Start usename with @, follwed by their full name and ending with the fullname lenght. ?

// First method 
// let str = prompt("Enter Your Full name : ");
// let size = str.length;
// console.log(`@${str}${size}`);

// Second method
// let fullname = prompt("Enter Your Full Name : ");
// let websityname = "@" + fullname + fullname.length;
// console.log(websityname);







