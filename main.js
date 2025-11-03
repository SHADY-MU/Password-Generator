let length = document.getElementById("length");
let passwordDisplay = document.getElementById("Password");
let passlable = document.getElementById("passlable")

function Lable(){
    passlable.innerText = "Length :"+" "+ length.value;
}
function CreatePassword(){
    let password = "";

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

        for(let i = 0; i < length.value ; i++ ){
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

    passwordDisplay.value = password;
}

function CopyText(){
    navigator.clipboard.writeText(passwordDisplay.value);
}

length.addEventListener("input", function(){
    if(length.value != 4){
        Lable();
    }
    else{
        length.value = 4;
        passlable.innerText = "Length : 4";
    }
})
Lable();