const passwordLength = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numerics = "1234567890";
const specialCase = "/?*&^%$#@!()";
const generatePassword = document.querySelector(".generate-password");
const btn = document.querySelector(".btn");
const copy = document.getElementById("copy");

btn.addEventListener("click", function () {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numerics[Math.floor(Math.random() * numerics.length)];
    password += specialCase[Math.floor(Math.random() * specialCase.length)];

    if (passwordLength > password.length) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)] + lowerCase[Math.floor(Math.random() * lowerCase.length)] +
            numerics[Math.floor(Math.random() * numerics.length)] + specialCase[Math.floor(Math.random() * specialCase.length)]
        generatePassword.value = password

    } else if (passwordLength == password.length) {
        generatePassword.value = password
    }
})

const popUp = document.querySelector(".popup");

copy.addEventListener("click", function () {
    if (generatePassword.value == "") {
        popUp.style.display = "block";
        popUp.innerHTML = "Please, generate password"
    } else {
        generatePassword.select();
        navigator.clipboard.writeText(generatePassword.value);
        popUp.style.display = "block";
        popUp.innerHTML = "Password Copied!"
    }
    setTimeout(() => {
        document.querySelector(".popup").style.display = "none";
    }, 1000);
})

