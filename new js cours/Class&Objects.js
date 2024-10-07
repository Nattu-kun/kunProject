// Date 01/feb/2024     Lecture : 11    Class & Objects js

// Objects : 
// -> A javaScript objects is an entity having state and behavior (properties and Methods ).

// Normal Object : 
    // const student = {
    //     name : "Saurabh",   // properties 
    //     marks : 58.12,
    //     printMarks : function() {   // methods
    //         console.log("makrs = ",this.marks);  // this for Access marks in object 
    //     },

    // };


// Prototype in javaScript :
// -> js objects have a specila propety called prototype.

// with the help of prototype we can call or add multipule objects at once object. 
// -> we can set prototype using __proto__      // refrence to the objects .

// const employe = {   // object 1
//     calcTax() {     // function in object 
//         console.log("Tax rate at 10%");
//     },

// };


// const karan = {     // object 2
//     salary : 50000,
// };


// karan__proto__ = employe;   // now we can access employe object in karan object as prototype 


// [NOTE : if object & prototype have same methods , objects method will be used ]



//              #. Class in javaScript 
// -> class is a program-code templeate for creating objects . 
// -> those objects will be have some state (properties , variable ) & some behaviour (function) inside it .

// class Myclass {     // creating class
//     // myMethod() {
//     //     console.log("Class in js");
//     // }
//      name;
//     // some properties 
// }

// let myObj = new Myclass(); // object 


// class toyotaCar {
//     start(){    // function 
//         console.log("Start the car");
//     }
//     stop() {    // function 
//         console.log("Stop the Car");
//     }
//     setBrand(name){     // function for name 
//         this.brand = name;
//     }
// }

// let forturner = new toyotaCar();    // forturner is object and new toyotaCar is class name 
//     let x = forturner.setBrand("Foutuner 4x"); // name 
    

// #. Constructor() methods is : 
// -> automatically invoked by new
// -> initializes objects .

// class myclass {
//     constructor (){
//         // some work 
//     }
//     myMethods(){
//         // some work 
//     }
// }


// NOTE : Constructor is First thing in object that work or print somthings .


// #. Inheritance in js 
// -> Inheritance is passing down properties & methods  from parent class ot child class 


// Exm

// class person {      // parent class 
//     eat(){
//         console.log("Eat");
//     }
//     sleep() {
//         console.log("Sleep bro");
//     }
// }


// class Engineer extends person  {
//     work() {
//         console.log("Solev somthing , build some");
//     }
// }

// let tanakaObj = new Engineer();

// if child & parent have same methods's , child's method will be used [Methods Overriding]

// NOTE : Inheritance ues for extends one class in to another .


// #. super keyward : 
// -> the super keyword is used to call the constructor of it's parent class to access the parent's properties and methods .


// super (args) // call the parent's constructor 
// super.parentmethod(args) // function invoke(call).

//  NOTE : parent constructor ke ues ke liye ham super keyword ka ues kar te hai 

// class person {      // parent class
//     constructor(name) {
//         this.species = "HomoSapicens";
//         this.name = name;
//     }
//     eat() {
//         console.log("Eat");
//     }
// }


// class child extends person{
//     constructor(name) {
//         super(name);    // to invoke parent class constructor 
//     }
//     work() {
//         super.eat();
//         console.log("Solve Problems");
//     }
// }


// let bor = new child("Saurabh");