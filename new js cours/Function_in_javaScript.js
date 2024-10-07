//      Lecture : 5              Function & Methods [NOTE : Redundancy -> Repeat]

// #. Function in javaScript .
// -> Block of code that perform a specific task , can be (invoked) -> call / or use kar na . whenever needed. 


// #. Function Definition . 
    
    // function functionName() {
    //     // do soem work -> block of code 
    // }


// #. Function call.
    // fucntionName(); -> call


// #. Function parameters return type :

// function functoinName(x, y) {  // ->  x and y is parameters 
//     let sum = x+y;
//     return sum; // -> return work at one time
// }

// console.log(functionName);


// Exp : 

// function sum(a, b) {
//     return a+b;

// }

// let val = sum(7,1);
//     console.log(val);

// [NOTE : function parameters is local variable -> block sope ]



// # . Arrow Function .
// -> compact way of writing a function : 
 
// const functionName = (parameters) => {
//     // do some work 
// }

// let sum = (a,b) => {
//     return a+b;
// }

// Exp : 

// const arrowSum = (a, b) => {
//     let total = a+b;
//     return total;
// }

// console.log(arrowSum(10,20));


// Q. WAP to find if String have vowels or not . or number of voweld in string . ?

// [NOTE : Vowels => 'a','e','i','o','u']

// function VoweldFind (str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i]))
//         count ++;
//     }
//     return count ;
// }

// let input = "Hi are you self no";

// console.log(VoweldFind(input));



// #.  for Each loop in Arrays 
// -> arr.forEach(callBackFunction) 
// CallBackFunction -> here , it is a function to execute for each elements in the array . 

// A callBack is a function passed as an argument to Another function .

// [NOTE] : In js function can pass as paramenter . 

// let arr = ["pune", "Delhi", "Mumbai", "UK", "UP"];
//     arr.forEach((val, a) => {
//         console.log("index",a," : ",val); // a stand for index and val stand for elements 
        
//     });


// -> for Each loop me 3 argument pass kar sakte hai 
// first parameter stand for value , second parameter stand for array index , thired paramenter stand for full arry | 

// let arr = ["Akari", "Tanaka", "Sawako", "Yuno", "Asta"];

    // arr.forEach((val , inx, arr) => { // val for elements , inx for index , arr full array 
    //     console.log("Name:",val,"index :",inx,arr);
    // });


// [NOTE : HOF||HOM full form : Higher order function or Higher order Methods]

// Example : 

// let num = [1,2,1,2,1]; // Array 

// let calcsuare = (num) => {  // arrow Function
//     console.log(num*num);
// };

//     num.forEach(calcsuare); // call back function 



//                       Some More Array Methods  : 

// 1. Map -> Create a new array with the results of some operation. The value its callback returns are used to from new array . 

    // arr.map(callbackfun(val,ind,array)); 

    // let arr = [1,2,3,4,5];
    
    // let newArr = arr.map((val, inx, arr) => {
    //     console.log("Index : ",val,"Value : ",inx,"Full Array : ",arr);
    // });

    

// 2. Filter -> Creates a new array of elements that give true and false  for a conditionlFilter. 

// Eax : all even number 

// let arr = [1,2,3,4,5,6,7,8,11];

// let evenArr = arr.filter((val) => {
//     return val%2==0;
// });

// console.log(evenArr);


// 3. Reduce -> performs some operations & reduces the array to a singal value. It returns that singale value . 

// let arr = [1,2,3,4,6];

// const output = arr.reduce((prev,curr) => {  // perv -> first value , curr - > second value 
//     return prev+curr;
// });

// console.log(output);