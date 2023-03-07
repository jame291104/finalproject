'use Strict'

//Declarando variables y asignandoles valores 

const nameRegister = document.getElementById("name_register");
const emailRegister = document.getElementById("email_register");
const passwordRegister = document.getElementById("password_register");
const emailLogin = document.getElementById("email_login");
const passwordLogin = document.getElementById("password_login");



const loginValidate = () =>{
    if (emailLogin.value.trim() === "") {
        alert("No ingresaste tu correo electrónico");

    } else if (passwordLogin.value.trim() === "") {
        alert("No ingresaste tu contraseña");

    } else if (emailLogin.value.trim() === emailRegister.value.trim() && passwordLogin.value.trim() === passwordRegister.value.trim()) {
        window.location = "../contact/contact.html";

    } else {
        alert("Los datos que ingresaste son incorrectos");

    }
}

const registerValidate = () =>{
    if (nameRegister.value.trim() === "") {
         alert("No ingresaste tu nombre");

    } else if (emailRegister.value.trim() === "") {
        alert("No ingresaste tu dirección de correo electrónico");

    } else if (passwordRegister.value.trim() === "") {
        alert("No ingresaste tu contraseña");

    } else {
        alert("Te has registrado exitosamente");

    }
    
}

const saveData = () => {
    let nombre = document.getElementById("name_register").value;
    localStorage.setItem('nombre', nombre);
    console.log(nombre);
}



