//  Date : 20/Feb/2024      Lecture 8 : Event in javaScript 

// Event in js
// -> the change in the state of an object is known as a Event .
// -> Evnet are fired to notify code of "intersting changes" that may affect code execution . 

// Some Evnet : 

// Mouse events(click,double click etc)
// keyboard evnets(keypress,keyup,keydown)
// form envets(submit etc)
// print evnets & some more events . 

// [NOTE] : we can define events in two ways : 
// 1. Inline event in HTML
// 2. in javaScript 


// 1. in HTML

/* <button onclick = "console.log('button was clicked')";>click me </button>

    <div onmouseover = "console.log('you are in div');" ><This is a div </div>

    */


// 2. in javaScript

// syntax : 

// node.event = () = {
    // handle here
// }

// let box = document.querySelector("button"); // this is for button

//     box.onclick = () => {
//         console.log("You clicked the click button pls don't click agane");
//     }

// let div = document.querySelector("#box1");  // this is for div box1

//     div.onmouseover = () => {
//         console.log("Your are in div ");
//     }


// Event objct : 
// -> it is a special object that has details about the event .
// -> all events handlers have access to the event object's properties and methods . 

// Syntac : 

// node.evnet = (env) => {
    // console.log(env)
    // console.log(env.type)
    // console.log(env.target)
    // console.log(env.clientX, ent.clientY);
// }


// let div = document.querySelector("#box1");  // this is for div box1


//     div.onmouseover = (evt) =>{
//         console.log("Hi i am Evnet in this div ");
//         console.log(evt);
//         console.log(evt.type);
//         console.log(evt.target);
//         console.log(evt.clientX,evt.clientY);
//     }


// Event Listeners : 
// -> it's a best way to handele Events in js . we can call many time in function with the 
// help of Event Listerners .

// Syntax : 
// 1 . node.addEventListener(event,callback)
// 1 . node.removeEventListener(event,callback)

// NOTE : the call back refrence should be the same to remove . 

let div = document.querySelector("#box1");  // this is for div box1

// # add : 
// div.addEventListener("mouseover",(evt) =>{
//     console.log("Button was clicked !");
//     console.log(evt);
// })

// # remove : 

// div.addEventListener("click",(evt) =>{
//     console.log("button was clicked 1 ");
   
// });


// div.addEventListener("click",(evt) =>{
//     console.log("button was clicked 2 ");
   
// });

// const del = () =>{
//     console.log("button was clicked 3");
// };

// div.addEventListener("click",del =>{ // I wnat remove this one , del is a refernce parameter 
// });


// div.addEventListener("click",(evt) =>{
//     console.log("button was clicked 4 ");
   
// });

// div.removeEventListener("click",del);

//                      #. Let,s Practice      

// Q1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode 
// when clicked again. 


// let modeEvt = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currnMode = "light";    // else = dark


// modeEvt.addEventListener("click" ,() =>{
//     if(currnMode === "light"){
//         currnMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else {
//         currnMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currnMode);
// })


// 2. sun up and down event : 

let sun = document.querySelector("#over");
let body = document.querySelector("body");
let sunTime = "down";     // else = down


sun.addEventListener("mouseover" , () =>{
    if(sunTime == "up"){
        body.classList.add("up");
        // body.classList.remove("down");
        sunTime = "down"
    }
    else {
        sunTime == "down";
        body.classList.add("down");
        // body.classList.remover("up");
        sunTime  = "up";
        
    }
    
    console.log("sun");
})

