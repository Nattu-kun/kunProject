// Date : 15/Feb/2024       Lecture 12 : Call backs, promises & Async-await 

// #. Sync in js 
// -> Synchronous : 

// -> Synchronous mens the code runs in a particular sequence of Instructions given in the program. Each instruction waits for the previous instruction to complet its execution . 


// -> Asynchronous : 

// -> Due to Synchronous programming, sometimes in programming instructions get blocked due to some previous instruction, which causes a delay in the UI. Asynchronous code execution allows to executed next instructions immedicitely and dosen't bloock the flow of code . 

// for code delay we use setTimeout();

// console.log("One");
// console.log("Two");

// setTimeout( () => {     // 4s delay
//     console.log("Hello");
// },4000);    // timeout 

// console.log("Three");
// console.log("Four");


// #. call-Backs
// -> A call-back is a function passed as an argument to another fucntion. 

// function sum(a,b){      // call-back
//     console.log(a+b);
// }

// function calculater(a,b,sumback){
//     sumback(a,b);
// }

// calculater(1,2,sum);    // call     // sum as a argument 


// #. Callback Hell 
// -> callback hell : nested callback started below one another forming a pyramid structure . {pyramid od Doom} .

// NOTE : This style of programming becomes difficult to understand & manage. ('callback hell') .


// function getData(dataId,getNextData){
//     setTimeout ( () =>{
//         console.log("Data : ",dataId);
//         if(getNextData){    // function for next data getting ...
//             getNextData();
//         }
//     },2000);
// }


// Callback Hell : 

// getData(1,() => {   // call 
//     console.log("Getting Data 2...");
//     getData(2, () => {  // call
//         console.log("Getting Data 3...");
//         getData(3); // last call 
//     });
// });


// #. Promises : 
// -> promises is for "Eventual" completion of task, It is an object in js . it is a solution to callback hell . 

                    // Promises 
    // pending              // fullfilled       // Rejected 
    // [stope]              //  [resolved]      // [chancel]

//      let promise = new promises (resolev,reject => {...});

// Syntax : 

// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a Promises : !!!");
//     resolve("success");     // function if
// });

// output : fullfille

// if we  pase same argument than result will be argument . 

// if we ues reject function than output will be error with pass argument . 


// -> A javaScript promises object can be : 

// 1. pending : The result is undefined .
// 2. Resolved : The result is a value (fullfilled) .
// 3. Rejected : The result is an error object (rejected) . 

// NOTE : Promises has state (pending , fullfilled and some result ) .(result for resolve  & error for Rejected )


// Ex : 

// function getData(dataId,getNextData){
//     return new Promise((resole,reject) => {
//         setTimeout( () => {
//             console.log("Data : ",dataId);
//             resole("Success");  // fullfilled 
//             if(getNextData){
//                 getNextData();  // function 
//             }
//         },10000)  // 5s
//     });
// }


// promises 
// .then() & .catch()

// promises.then((res) =>{...});   // if resolve
// promises.catch((rej) =>{...});   // if reject

// const getPromise = () => { 
//     return new Promise((resolve,reject) => {
//     console.log("I am a Promise !!!");
//     // resolve("Success");
//     reject("Error");
// });
// };


// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise Fullfilled",res);
// });

// promise.catch((erro) =>{
//     console.log("Rejected : ",erro);
// });


// promise chain : 
// -> it's better than callbakc hell : 

// for getdata dataId function : 


// function getData(dataId,getNextData){
//     return new Promise((resole,reject) => {
//         setTimeout( () => {
//             console.log("Data : ",dataId);
//             resole("Success");  // fullfilled 
//             if(getNextData){
//                 getNextData();  // function 
//             }
//         },3000)  // 5s
//     });
// }

// console.log("Getting data 1 ...");
// getData(1)  // 1
//     .then((res) =>{
//         console.log("Getting data 2 ...");
//        return getData(2); // 2
//     }).then((res) =>{
//         console.log("Getting data 3 ...");
//         return getData(3);  
//     }).then((res) =>{
//         console.log("Getting data 4...");
//         return getData(4)
//     }).then((res) =>{
//         console.log(res);
//     });


// ->   Async-Await >> promise chain >> callback hell

// #. Async-Await : 
// -> async-function always returns a promise . 

//          async function myfucntion() () => {....};

// await pauses the execution of it's surrunding async function uniti the promise is setteld. 

// Example : 

function getData(id){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Data : ",id);
            resolve("success");
        }, 3000);
    });
}

//  Async-await 

(async function getAllData(){
    console.log("Getting data 1 ...");
    await getData(1);
    console.log("Getting data 2 ...");
    await getData(2);
    console.log("Getting data 3 ...");
    await getData(3);
})();

// IIFE : Immediately Invoked function Expression 
// -> IIFE is a function that is called immediately as soon as it is defined . 
// Three Way to define 
// 1. (function () {
    // code...
// }) ();

// 2. ( () => {
//  code ...
// }) ();

// 3. (async () =>{
// code 
// }) ();


