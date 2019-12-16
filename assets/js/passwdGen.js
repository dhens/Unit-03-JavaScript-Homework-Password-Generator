const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseletters = lowercaseLetters.toUpperCase();
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+{}|:?><[]";
const passwordForm = document.querySelector("body > div > section > textarea");
const minPassLength = 8;
const maxPassLength = 128;
let password = "";
let specialCharsCheckbox = document.getElementsByName("specialChars")[0];
let numbersCheckbox = document.getElementsByName("numbers")[0];
let lwrCharsCheckbox = document.getElementsByName("lwrChars")[0];
let upprCharsCheckbox = document.getElementsByName("upprChars")[0];


// function to generate a password with the number of characters the user said in the passwordLength prompt
function createPassword() {
    password = "";
    let passwordLength = prompt("Length of password? (Must be from 8 to 128 characters");
    if (passwordLength >= minPassLength && passwordLength <= maxPassLength) {
        for (i=0; i<passwordLength;i++) {

            // Set password equal to the variable password after it randomly egenrates a number to select a random char from the 
            // lowercaseLetters variable and append it to the password variable
            password = password+=lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    }
    document.getElementById("passwordBox").innerHTML = password;
}
    else{
        alert("Password MUST BE BETWEEN 8 AND 128 characters!")
    }
    console.log(password);
}

    function populateForm(enterLength) {
        passwordForm = createPassword(enterLength);
        
    }