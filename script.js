const passBox = document.getElementById("passbox");
const copyPass = document.getElementById("copypass");
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const lowerCase_el = document.getElementById("lowercase");
const upperCase_el = document.getElementById("uppercase");
const numbers_el = document.getElementById("numbers");
const symbols_el = document.getElementById("symbol");
const generateButton = document.getElementById("generate");

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digitChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

/*listen to the slider changing */
inputSlider.addEventListener("input",()=>{
    sliderValue.innerText = inputSlider.value;
}, false)

/**Copy password button */
copyPass.addEventListener("click", ()=>{
    if (passBox.value != "" || passBox.value.length >= 10)
    {
        navigator.clipboard.writeText(passBox.value);
        copyPass.innerText = "check";

        setTimeout(()=> {
        copyPass.innerText = "content_copy";
        }, 1500);
    }
})

/**generate password button */
generateButton.addEventListener("click", ()=>{
    passBox.value = generatePassword();
})

/**Generate password function */
function generatePassword() {
    const passLength = inputSlider.value;
    let chars = "";
    let password = "";

    chars += lowerCase_el.checked ? lowercaseChars : "";   
    chars += upperCase_el.checked ? uppercaseChars : "";   
    chars += numbers_el.checked ? digitChars : "";   
    chars += symbols_el.checked ? symbolChars : "";
    
    for (let i = 0; i < passLength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}


