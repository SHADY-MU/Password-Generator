let lenght = document.getElementById("lenght");
let passwordDisplay = document.getElementById("Password");
let passlable = document.getElementById("passlable")

function Lable(){
    passlable.innerText = "Length :"+" "+ lenght.value;
}
function CreatePassword(){
    let password = "";

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

        for(let i = 0; i < lenght.value ; i++ ){
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

    passwordDisplay.value = password;
}

function CopyText(){
    CopyText = passwordDisplay.value;
    
    navigator.clipboard.writeText(passwordDisplay.value);

   
}

lenght.addEventListener("input", function(){
    if(lenght.value != 4){
        Lable();
    }
    else{
        lenght.value = 4;
        passlable.innerText = "Length : 4";
    }
})
Lable();