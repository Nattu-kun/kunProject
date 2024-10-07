// Date : 05/04/2024    Lecture : last of javaScript    Topic : Fetch API with Project 

// API = Application programming Interface 
// => Fetch API
// -> The Fetch API provides an interface for fetching (sending || receiving) resources . 

// it uses Request and Response objects. 
// The fetch() method is used to fetch a resource(data).


const URL = "https://cat-fact.herokuapp.com/facts";

// the sytax of fetch api is 
// let promise = fetch(url,[options]);
let promise = fetch(URL);

const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response); 
}
