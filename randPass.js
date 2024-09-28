
const passwordBox = document.getElementById("password");
const lenght = 16;

// some main variables for password
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+=-][}{";

// store all types fo charactor 
const allChars = upperCase + lowerCase + number + symbol;

// main function that create and store password 
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // while loop use for store password up-to lenght of password 
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // store value in passwordBox in page
    passwordBox.value = password;
}

    // function to copy password 
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


