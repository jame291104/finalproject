'use strict'

document.getElementById("btn_login").addEventListener("click", iniciarSesion)
document.getElementById("btn_register").addEventListener("click", register);

window.addEventListener("resize", anchoPagina);

//Declaración de variables

let contenedorLoginRegister = document.querySelector(".container_login-register")
let formularioLogin = document.querySelector(".form_login");
let formularioRegister = document.querySelector(".form_register");
let cajaTraseraLogin = document.querySelector(".background_box_login");
let cajaTraseraRegister = document.querySelector(".background_box_register");

function anchoPagina() {
    if (window.innerWidth > 850) {
        cajaTraseraLogin.style.display = "block";
        cajaTraseraRegister.style.display = "block";
    }else{
        cajaTraseraRegister.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
    }
}

anchoPagina()

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "10px";
        formularioLogin.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.opacity ="0";
    } else {
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "block";
        cajaTraseraRegister.style.display = "block";
        cajaTraseraLogin.style.display ="none"; 
    }
}


function register() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "410px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.opacity = "0";
        cajaTraseraLogin.style.opacity ="1";
    } else {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.display = "none";
        cajaTraseraLogin.style.display ="block";
        cajaTraseraLogin.style.opacity ="1";
    }
}
