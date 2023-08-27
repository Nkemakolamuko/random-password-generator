const btn = document.querySelector(".btn");

const input = document.getElementById("input");

const copyIcon = document.querySelector(".copy");

const copied = document.querySelector(".copied");

// Add Event Listener to button 
btn.addEventListener("click", () => {
    generatePassword();
})

// Add Event Listener for icon 
copyIcon.addEventListener("click", () => {
    copyPassword();
    copied.classList.remove("active");
    setTimeout(() => {
        copied.classList.add("active")
    }, 2000)
})

// Defining Password function
function generatePassword() {
    const characters = "R$9aLpB5qWx#2vFmG8eTcY1zA!6sHdJkI&oU3lNpX@4rE7bZwCnVfQyMhKuSjD9aLpB5qWx#2vFmG8eTcY1zA!6sHdJkI&oU3lNpX@4rE7bZwCnVfQyMhKuSjD";

    const passwordLength = 10;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }

    input.value = password;
    copied.innerText = `${password} copied`;
}

// Defining Icon Function 
function copyPassword() {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
}