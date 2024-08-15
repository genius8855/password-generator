const passwordBox = document.getElementById("input");
const nameBox = document.getElementById("nameBox");
// const lengthValue = document.getElementById("lengthBox").value;


const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetter = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_[]{}/";
const allSymbol = capitalLetter + smallLetter + number + symbol;



function getPassword(){
    let password = nameBox.value;
    const lengthValue = document.getElementById("lengthBox").value;
    const length = parseInt(lengthValue, 10);

    if (isNaN(length) || length < 4) {
        alert("Please enter a valid length (at least 4).");
        return;
    }

    password += capitalLetter[Math.floor(Math.random() * capitalLetter.length)];
    password += smallLetter[Math.floor(Math.random() * smallLetter.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(password.length < length){
        password += allSymbol[Math.floor(Math.random() * allSymbol.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy");
}



