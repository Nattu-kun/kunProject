// Date : 03/Feb/2024           

//  Lecture : 6         DOM [Document Object Model]     

// The 3 Musketeers of Web-Deb is :
// HTML(Structure of web)
// CSS (Style of web) 
// javaScript(logic of web)

// started code 
// 1. <style> tag commects HTML with CSS.
// 2. <script> tag commects HTML with js.

//  Q. Why we create another file for js,css in html . ?
// *. Readability
// *. Modular 
// *. Browser caching 


// MOST INPORTENT  : window object 
// -> the window object represents ana open window in broswer. it is browser's object (not js) & is automatically create by browser.
// -> It is a [Gloabal] object with lost of properties & methods . 

// What is DOM ?
// -> when a web page is loaded, the browser creates a Document object Model (DOM) of the page.

// window - > document -> html -> head and body. in head {meta,meta,title,links} and body {div and script or  div-sub-div}.

// console.log(..) => print data 
// window.dir(..) => document - > properties / Methods 


// #.  DOM manipulation .

// 1. selection with id     // #id-name
// document.getElementsById("id-name");

// 2. selectoin with class  // .class-name
// document.getElementsbyclassname("class-name");

// 3. selection with tag 
// document.getElementsByTagName("tag-name");


// DOM Nods => text nods, comment nods, elements nods ect..

// #. Query selector
// 1. for id and class or perticular name tag 
//  document.querySelector("#myid",".myclass","Tag-name");

// 2. for all tags 
//  document.querySelectorAll("myid",".myclass"...ect);


// NOTE : Query Selector is ues for print HTML in javaScript with the help of windows key -> document object .


// Properties : 

// 1. tag-name : return tag for element nodes .

// let tag = document.querySelector("#id");
// console.dir(tag);

// 2. innerText : return the text content of the element and all its children . 

// let inner = document.querySelector(".class");
// console.dir(inner);

// 3. innerHTML : return the plain text or html contents in the elements .

// let val = document.querySelector(".class");

// console.dir(val);

// with the help of innertext and innerHTML we can change element value or style also . 

// let div = document.querySelector("div");

// console.dir(div);


// 4. textcontent  : return texttual content even for hidden elements . 


// DOM Manipulation . 
// -> Attributes -> id or class

// 1. getAttribute(att) // to get the attribute value . 

// Exam :

// id :

// let pro = document.querySelector("div");
// console.log(pro);    // for div Access 

// let id = pro.getAttribute("id") // id Access
// console.log(id);


// class :

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// #. Change Attribute value :  // change name of id, class
// NOTE : this show on element box

// setAttribute("old","new");   // to set the attribute val

// let newSet = document.querySelector("div");
// console.log(newSet);

// let newVal = newSet.setAttribute("id","new-id");
// console.log(newVal);

// -> Style :

// node.style   // with the node.style we can change css style in js. 

// const div = document.querySelector("#box");
// console.dir(div);

// 1. change background color : 
// variable-name.style.backgroundcolor = "color-name";


// 2. change font size :
// variable-name.style.fontSize = "25px";


// 3. change innerText value : 
// variable-name.innerTaxt = "Hello !";


// #. Insert Element :  // create new element or data 

// 1. Create :
//     let element = document.createElement("Button");
//     console.dir(element);
//     element.innerText = "Click Me !";

// 2. Add 

// 1. node.append(variable) :  // adds at the end of node (inside)

// let div = document.querySelector("#box");
// console.dir(div);

// 2. node.prepend(variable) :  // adds at the start of node (inside)

// let div = document.querySelector("#box");
// console.dir(div);

// 3. node.befor(variable)  :   // adds before the node (outside)

// let div = document.querySelector("#box");
// console.dir(div);

// 4. node.after(variable) :    // adds after the node (outside) 

// let div = document.querySelector("#box");
// console.dir(div);

// #. Delete Element :

let para = document.querySelector("p");
console.dir(para);
