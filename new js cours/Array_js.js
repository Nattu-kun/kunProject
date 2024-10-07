//      Lecture : 4         Array in javaScript [ Arrays are mutable{change} ]

// Array 
// -> collections of items. [linear]

// Create Array 

// let arr_name = ["Akari","Jiyro","Tanaka","Astha"];  // string Array
// console.log(arr_name);
// let arr_num = [12,14,21,66,74]; // numbers Array
// console.log(arr_num);


// Array Indices . 

// arr[0],arr[1],arr[2]...arr[n]


// Looping over an array 
// -> with the help of loop we can print all array elements at one code . 

// for loop 

// let arr_anime = ["A silent Voice", "Your Name", "Garder of World", "5 Sentemeter"];

// let size = arr_anime.length;

// for loop
// for(let i=0; i<size; i++){  
//     console.log(arr_anime[i]);
// }

// for of loop 
// for(let val of arr_anime){
//     console.log(val);
// }


// Let's practice : 

// Q1. For a given array with prices of 5 Items ->[250, 645, 300, 900, 500, 1200] all Items have an offer of 10% off on them . change the array to store final price offer applying offer. 

// let Itmes = [250,645,300,900,500,1200];

// console.log(Itmes);
// for(let i=0;i<Itmes.length;i++){
//     let offer = Itmes[i]/10;
//     Itmes[i] -= offer;
// }

// console.log("After offer : \n",Itmes);


//                     #. javaScript Array Methods or function 

// 1. push(); -> add to end 
// -> it's ues to add a data in array in back side .

// let name = ["Akari","Yuno","Gojukun"];
// console.log(name); // old
//     name.push("Meme"); // add one element
// console.log(name); // new array 

// 2. pop(); -> delet from end & return 

// let roll = [1,2,3,4,5,6,7];
// console.log(roll);
// let delet = roll.pop();
// console.log("Delet : ",delet);
// console.log(roll);


// 3. tostring(); -> converted array in to string .

// let id = [121,131,141,155,106];
// console.log(id); // array
// console.log(id.toString()); // string 

// 4. concat(); -> joins multiple array & return result .

// let id = [121,132,441,213,102];
// let name = ["Me","you","ha","hi","yha"];
// for(let i=0;i<id.length;i++){
//     console.log(id[i],name[i]);
// }
 
// console.log(id.concat(name));


// 5. unshift(); -> add element in to start position .

// let arr = [12,13,54,10,91];
// console.log(arr);

//     arr.unshift(0); // add in 0 index 
//     console.log(arr);

// 6. shift(); -> delet element in to start position & return value .

// let arr = ["Akari","Tanaka","Black-clover"];
// console.log(arr);
// let del = arr.shift();
// console.log("Delet Value : ",del);
// console.log(arr);


// 7. slice(); -> return a piece of the array 

// let anime = ["Masamune","Yamada kun level 999","Sawaka","Kitagawa","Miyamura","Shiyori"];

// console.log(anime);

// console.log(anime.slice(1,4)); // start to end-1 take

// 8. Splice(); -> change original array (add,remove,replace) .
//              > splice(startIdx,deletCount,newEle) :

// let arr = [ 12,13,15,17,19];
// console.log(arr);
//     arr.splice(2,2,101,102); // 2 stand for delet || index 2 stand for noOf deletCount || 101-new element-index-2 || 102-new element-index-3
//     console.log(arr);


// #. Delet And add new element :
    // arr.splice(1,3,0,1,0);
    // console.log(arr);


// // #. Add new element : 
//     arr.splice(3,0,101); // index - 3 , delet 0 , add new 101 element 
//     console.log(arr);


// #. Delet Element : 
    // arr.splice(1,3); // Delet 1 to 3 index elements
    // console.log(arr);


// #. Replace Element : 

    // arr.splice(0,3,0,0,0); // index o to 3 delet and tham add new elements 
    // console.log(arr);

